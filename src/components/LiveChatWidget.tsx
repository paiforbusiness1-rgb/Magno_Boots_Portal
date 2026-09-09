import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Send,
  Bot,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/brandData';
import { MagnoBootsLogo } from './MagnoBootsLogo';

interface LiveChatWidgetProps {
  onOpenQuoteModal: () => void;
  onExploreProducts: () => void;
}

interface Message {
  id: string;
  sender: 'agent' | 'user';
  text: string;
  timestamp: string;
  quickActions?: {
    label: string;
    action: 'catalog' | 'quote' | 'whatsapp' | 'text';
    payload?: string;
  }[];
}

export const LiveChatWidget: React.FC<LiveChatWidgetProps> = ({
  onOpenQuoteModal,
  onExploreProducts,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'agent',
      text: '¡Hola! 👋 Bienvenido a Magno Boots. Somos fabricantes de calzado industrial en León, Guanajuato.',
      timestamp: getCurrentTime(),
    },
    {
      id: '2',
      sender: 'agent',
      text: '¿En qué podemos ayudarte hoy? Puedes explorar nuestro catálogo oficial con prueba de laboratorio NOM-113 o solicitar una cotización por lote.',
      timestamp: getCurrentTime(),
      quickActions: [
        { label: '🥾 Ver Catálogo de Productos', action: 'catalog' },
        { label: '📑 Cotizar Mayoreo (B2B)', action: 'quote' },
        { label: '🛡️ ¿Cuentan con NOM-113?', action: 'text', payload: '¿Tienen certificación NOM-113?' },
        { label: '💬 WhatsApp Directo', action: 'whatsapp' },
      ],
    },
  ]);

  // Historial de mensajes para Groq (solo user/assistant, sin mensajes de sistema)
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);

  // Auto popup teaser bubble after 3 seconds if not interacted
  useEffect(() => {
    const timer = setTimeout(() => {
      // Keep unread indicator active
      setHasUnread(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const handleQuickAction = (
    action: 'catalog' | 'quote' | 'whatsapp' | 'text',
    payload?: string
  ) => {
    if (action === 'catalog') {
      onExploreProducts();
      setIsOpen(false);
    } else if (action === 'quote') {
      onOpenQuoteModal();
      setIsOpen(false);
    } else if (action === 'whatsapp') {
      window.open(
        `https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%20Magno%20Boots,%20quisiera%20atenci%C3%B3n%20personalizada`,
        '_blank'
      );
    } else if (action === 'text' && payload) {
      handleUserSendMessage(payload);
    }
  };

  const generateBotReply = async (userMsg: string) => {
    setIsTyping(true);

    const updatedHistory: { role: 'user' | 'assistant'; content: string }[] = [
      ...chatHistory,
      { role: 'user', content: userMsg },
    ];

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedHistory }),
      });

      const data = await response.json() as { reply?: string; error?: string };
      const replyText =
        data.reply ??
        'Lo siento, no pude procesar tu consulta. Por favor contáctanos por WhatsApp al +52 477 390 1824.';

      setChatHistory([...updatedHistory, { role: 'assistant', content: replyText }]);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'agent',
          text: replyText,
          timestamp: getCurrentTime(),
          quickActions: [
            { label: '💬 Hablar con Asesor', action: 'whatsapp' },
            { label: '📑 Cotizar Mayoreo', action: 'quote' },
          ],
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'agent',
          text: 'Hubo un problema al conectar con el asistente. Por favor contáctanos directamente por WhatsApp al +52 477 390 1824.',
          timestamp: getCurrentTime(),
          quickActions: [{ label: '💬 WhatsApp Directo', action: 'whatsapp' }],
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleUserSendMessage = (textToSend?: string) => {
    const messageText = textToSend || input.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText,
      timestamp: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');

    generateBotReply(messageText);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2">
          {/* Teaser Bubble — único botón de apertura */}
          <div
            onClick={handleOpenChat}
            className="relative flex items-center gap-2 sm:gap-2.5 bg-zinc-900 border border-[#F36C21]/40 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-2xl cursor-pointer hover:border-[#F36C21] hover:bg-zinc-800 transition-all transform hover:-translate-y-0.5 max-w-[calc(100vw-6rem)] sm:max-w-none"
          >
            <div className="relative shrink-0">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping absolute -top-0.5 -right-0.5"></div>
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
            </div>
            <div className="text-left truncate">
              <p className="text-[11px] font-bold text-white leading-tight truncate">
                Asesor Magno Boots
              </p>
              <p className="text-[10px] text-zinc-400 truncate">¿Dudas sobre tallas o mayoreo?</p>
            </div>
            {hasUnread && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-amber-400 text-zinc-950 font-black text-[10px] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                1
              </span>
            )}
          </div>
        </div>
      )}

      {/* Chat Window Box */}
      {isOpen && (
        <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-6 z-50 w-[calc(100vw-1.5rem)] sm:w-96 h-[520px] max-h-[85vh] bg-zinc-900 border border-zinc-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-zinc-950 p-4 border-b border-zinc-800 flex items-center justify-between relative">
            <div className="flex items-center gap-3">
              <div className="relative">
                <MagnoBootsLogo variant="icon" size="sm" />
                <span className="w-2.5 h-2.5 bg-emerald-500 border-2 border-zinc-950 rounded-full absolute bottom-0 right-0"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-black uppercase tracking-wide text-white">
                    ASISTENTE MAGNO BOOTS
                  </h3>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-[#F36C21] text-white">
                    IA
                  </span>
                </div>
                <p className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  En línea • Respuesta en tiempo real
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-zinc-900/90 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div className="flex items-end gap-1.5 max-w-[88%]">
                  {msg.sender === 'agent' && (
                    <div className="w-6 h-6 rounded-full bg-[#F36C21]/20 border border-[#F36C21]/40 flex items-center justify-center text-[#F36C21] shrink-0 mb-1">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`p-3 rounded-2xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#F36C21] to-[#D85100] text-white font-medium rounded-br-none shadow-md'
                        : 'bg-zinc-950 text-zinc-200 border border-zinc-800 rounded-bl-none shadow'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`text-[9px] block mt-1.5 text-right ${
                        msg.sender === 'user' ? 'text-amber-200/80' : 'text-zinc-500'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                {msg.quickActions && msg.quickActions.length > 0 && (
                  <div className="mt-2.5 ml-7 flex flex-wrap gap-1.5 max-w-[90%]">
                    {msg.quickActions.map((qa, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickAction(qa.action, qa.payload)}
                        className="text-[11px] font-bold bg-zinc-950 hover:bg-[#F36C21] hover:text-white text-[#F36C21] border border-[#F36C21]/40 px-2.5 py-1.5 rounded-xl transition-all shadow-sm flex items-center gap-1 text-left"
                      >
                        <span>{qa.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 ml-1 text-zinc-400 text-[11px]">
                <div className="w-6 h-6 rounded-full bg-[#F36C21]/20 flex items-center justify-center text-[#F36C21]">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-zinc-950 border border-zinc-800 px-3 py-2 rounded-2xl flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#F36C21] rounded-full animate-bounce"></span>
                  <span
                    className="w-1.5 h-1.5 bg-[#F36C21] rounded-full animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  ></span>
                  <span
                    className="w-1.5 h-1.5 bg-[#F36C21] rounded-full animate-bounce"
                    style={{ animationDelay: '0.4s' }}
                  ></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-zinc-950 border-t border-zinc-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUserSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Escribe tu consulta sobre calzado..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
                className="flex-1 bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#F36C21] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="bg-[#F36C21] hover:bg-[#D85100] disabled:opacity-40 disabled:hover:bg-[#F36C21] text-white p-2.5 rounded-xl transition-all shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between text-[10px] text-zinc-500 mt-2 px-1">
              <span>Magno Boots • León, Gto.</span>
              <button
                onClick={() => handleQuickAction('whatsapp')}
                className="text-[#F36C21] hover:underline flex items-center gap-0.5 font-bold"
              >
                Atención Humana por WhatsApp <ExternalLink className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

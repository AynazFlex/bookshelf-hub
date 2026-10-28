interface BookLink {
  id: string;
  title: string;
  author: string;
  description: string;
  bgClass: string;
  borderColor: string;
  url: string;
}

export default function App() {
  const myBooks: BookLink[] = [
    {
      id: 'suntzu',
      title: 'ИСКУССТВО ВОЙНЫ',
      author: 'Сунь-Цзы',
      description: '13 глав в виде графов.',
      bgClass: 'bg-gradient-to-br from-slate-950 to-indigo-950/40',
      borderColor: 'border-indigo-500/20 hover:border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.02)] hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
      url: 'https://vercel.app' 
    },
    {
      id: 'machiavelli',
      title: 'ГОСУДАРЬ',
      author: 'Никколо Макиавелли',
      description: '26 глав в виде графов.',
      bgClass: 'bg-gradient-to-br from-[#0c0205] to-[#2d0510]/20',
      borderColor: 'border-rose-950/60 hover:border-amber-600 shadow-[0_0_15px_rgba(136,19,55,0.02)] hover:shadow-[0_0_30px_rgba(217,119,6,0.15)]',
      url: 'https://vercel.app' 
    }
  ];

  return (
    /* h-dvh и overflow-hidden жестко держат каркас приложения в границах экрана, предотвращая дергание всего сайта вверх-вниз на мобилках */
    <div className="h-dvh w-screen bg-[#030712] text-slate-100 font-mono flex flex-col justify-between p-6 md:p-12 relative overflow-hidden">
      
      {/* Фоновая координатная сетка */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5 pointer-events-none" />

      {/* ШАПКА ХАБА (shrink-0 не дает тексту сжиматься) */}
      <header className="text-center md:text-left z-10 shrink-0 mb-6">
        <h1 className="text-2xl md:text-3xl font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-amber-400 to-rose-500">
          STRATAGEM.HUB
        </h1>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Цифровая библиотека A.D</p>
      </header>

      {/* ЦЕНТРАЛЬНЫЙ СТЕЛЛАЖ: Теперь flex-1 забирает всё свободное место на экране, а overflow-y-auto включает идеальный изолированный скролл */}
      <main className="flex-1 overflow-y-auto z-10 w-full flex items-start justify-center pb-8 custom-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full pt-2">
          {myBooks.map((book) => (
            <a
              key={book.id}
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col justify-between p-6 rounded-lg border backdrop-blur-md transition-all duration-300 group min-h-[220px] ${book.bgClass} ${book.borderColor}`}
            >
              <div>
                <span className="text-[9px] text-slate-500 uppercase tracking-widest block mb-1">{book.author}</span>
                <h2 className="text-lg font-bold tracking-wider group-hover:text-white transition-colors">
                  {book.title}
                </h2>
                <p className="text-xs text-slate-400 mt-4 leading-relaxed font-sans">
                  {book.description}
                </p>
              </div>
              
              <div className="mt-8 flex items-center justify-between text-[11px] uppercase tracking-wider text-slate-500 group-hover:text-slate-300 transition-colors">
                <span>Открыть книгу</span>
                <span className="transform group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </a>
          ))}

          {/* Ячейка для будущей 3-й книги */}
          <div className="flex flex-col justify-center items-center p-6 rounded-lg border border-dashed border-slate-800 bg-slate-950/10 text-slate-600 text-xs tracking-widest uppercase select-none min-h-[220px]">
            <span className="text-lg mb-1">+</span>
            Ячейка заблокирована
          </div>
        </div>
      </main>

      {/* ПОДВАТ ХАБА (Остается прибитым к низу и не прыгает при скролле карточек) */}
      <footer className="text-center text-[9px] text-slate-600 tracking-widest z-10 shrink-0 pt-4 border-t border-slate-900">
        CORE-HUB V1.0 • ALL PROTOCOLS LINKED
      </footer>
    </div>
  );
}

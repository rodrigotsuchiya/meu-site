import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";

// Importações Dinâmicas Estratégicas
const GLSLHills = dynamic(() => import("@/components/ui/glsl-hills").then(mod => mod.GLSLHills), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-bg/50" /> 
});

const TextScramble = dynamic(() => import("@/components/ui/text-scramble").then(mod => mod.TextScramble), { 
  ssr: false,
  loading: ({ children }: any) => <span>{children}</span> 
});

const Gallery4 = dynamic(() => import("@/components/ui/gallery4").then(mod => mod.Gallery4), { 
  ssr: false,
  loading: () => <div className="h-[500px] animate-pulse bg-black/5" />
});

export default function Home() {
  return (
    <>
      <header className="fixed top-0 w-full bg-bg/90 backdrop-blur-md brutal-border-b z-50">
        <div className="px-6 h-20 flex items-center justify-between uppercase text-sm lg:text-base font-bold tracking-widest">
          <a href="#" className="flex-shrink-0">Tsuchiya Tech.</a>
          <nav className="hidden md:flex gap-12">
            <a href="#dores" className="hover:underline underline-offset-8">Problema</a>
            <a href="#servicos" className="hover:underline underline-offset-8">Serviços</a>
            <a href="#projetos" className="hover:underline underline-offset-8">Projetos</a>
          </nav>
          <a 
            href="https://wa.me/5515991703282?text=Ol%C3%A1%21+Vim+pelo+site+da+Tsuchiya+Tech+e+gostaria+de+falar+com+o+desenvolvedor+sobre+um+projeto" 
            target="_blank" 
            rel="noopener" 
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 brutal-border rounded-full hover-invert transition-colors"
          >
            Falar com Dev
          </a>
        </div>
      </header>

      <main className="pt-20">
        {/* 1. Hero Section */}
        <section className="relative min-h-[85vh] flex flex-col justify-end px-6 pb-16 brutal-border-b overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <Suspense fallback={null}>
              <GLSLHills width="100%" height="100%" />
            </Suspense>
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-end relative z-10">
            <div className="lg:col-span-8">
              <FadeUp>
                <h1 className="text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] font-bold tracking-tighter uppercase mb-8 lg:mb-0">
                  Sites, sistemas <br/>
                  & automação <br/>
                  com IA.
                </h1>
              </FadeUp>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right pb-2">
              <div className="min-h-[100px] md:min-h-[120px]">
                <TextScramble className="text-lg md:text-2xl font-medium max-w-sm mb-10 leading-snug">
                  Para empresas que precisam de visibilidade ou desejam eliminar o trabalho braçal. Engenharia de software ágil, técnica e direto ao ponto.
                </TextScramble>
              </div>
              <FadeUp delay={200}>
                <a 
                  href="https://wa.me/5515991703282?text=Ol%C3%A1%21+Vim+pelo+site+da+Tsuchiya+Tech+e+gostaria+de+falar+com+o+desenvolvedor+sobre+um+projeto" 
                  target="_blank" 
                  rel="noopener" 
                  className="inline-flex items-center justify-center px-8 py-5 text-xl font-bold bg-black text-bg rounded-full hover-invert-reverse brutal-border transition-all uppercase tracking-wide"
                >
                  Falar com Desenvolvedor <ArrowRight className="w-6 h-6 ml-3" />
                </a>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* 2. Dores do Cliente */}
        <section id="dores" className="brutal-border-b">
          <FadeUp className="px-6 py-12 md:py-16 brutal-border-b flex flex-col md:flex-row justify-between items-start md:items-end">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase max-w-3xl leading-none mb-4 md:mb-0">Processos lentos destroem o seu dia?</h2>
            <span className="text-2xl font-bold">1.1</span>
          </FadeUp>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black">
            <DoreCard 
              letter="A" 
              title={<>Falta de <br/>Visibilidade</>} 
              text="Sua empresa não é encontrada no digital, perdendo negócios diários para concorrentes com presença estruturada." 
            />
            <DoreCard 
              letter="B" 
              title={<>Lentidão <br/>Mecânica</>} 
              text="Sua equipe gasta horas em tarefas operacionais manuais que poderiam ser resolvidas em segundos por um sistema." 
            />
            <DoreCard 
              letter="C" 
              title={<>Ausência <br/>de IA</>} 
              text="Operar sem inteligência artificial hoje é o equivalente a usar máquina de escrever na era do computador." 
            />
          </div>
        </section>

        {/* 3. Nossos Serviços */}
        <section id="servicos" className="brutal-border-b">
          <FadeUp className="px-6 py-12 md:py-16 brutal-border-b flex justify-between items-end">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
              Serviços
            </h2>
            <span className="text-2xl font-bold">1.2</span>
          </FadeUp>
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-black">
            
            <ServiceCard 
              title="Site Landing Page"
              price="R$ 1.000,00"
              items={["Design responsivo e minimalista", "Otimização para SEO", "Integração direta com WhatsApp"]}
            />

            <div className="flex flex-col p-8 lg:p-12 bg-black text-bg relative group hover:bg-bg hover:text-black transition-colors">
              <div className="absolute top-8 right-8 text-xs font-bold uppercase tracking-widest px-4 py-2 brutal-border border-bg rounded-full group-hover:border-black">Mais procurado</div>
              <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-4 mt-12 lg:mt-0">
                Automação WhatsApp
              </h3>
              <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
                <span className="text-base font-bold block mb-2 opacity-50 uppercase tracking-widest">A partir de</span>
                R$ 1.000,00
              </div>
              <ul className="flex-1 space-y-4 mb-16 text-lg font-medium opacity-80">
                <li className="flex items-start gap-4"><ArrowRight className="w-6 h-6 shrink-0 mt-0.5" /> Triagem automática de leads</li>
                <li className="flex items-start gap-4"><ArrowRight className="w-6 h-6 shrink-0 mt-0.5" /> Integração com IA</li>
                <li className="flex items-start gap-4"><ArrowRight className="w-6 h-6 shrink-0 mt-0.5" /> Respostas 24 horas por dia</li>
              </ul>
              <a 
                href="https://wa.me/5515991703282" 
                target="_blank" 
                rel="noopener" 
                className="w-full inline-flex items-center justify-center px-6 py-5 text-lg font-bold brutal-border border-bg rounded-full bg-bg text-black group-hover:bg-black group-hover:text-bg transition-colors uppercase tracking-widest"
              >
                Solicitar Escopo
              </a>
            </div>

            <ServiceCard 
              title="Automação OpenClaw"
              price="R$ 2.500,00"
              items={["Integração profunda de sistemas", "Fluxos de dados complexos", "Mapeamento sob medida"]}
            />

          </div>
        </section>

        {/* Gallery Section */}
        <section id="projetos" className="brutal-border-b">
          <Suspense fallback={<div className="h-[500px] animate-pulse bg-black/5" />}>
            <Gallery4 />
          </Suspense>
        </section>

        {/* 4. Formulário / CTA Final */}
        <ContactSection />

      </main>

      <footer className="bg-bg py-12 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 font-bold uppercase text-sm tracking-widest">
          <div className="text-2xl tracking-tighter">Tsuchiya Tech.</div>
          
          <div className="flex flex-col md:flex-row gap-8 text-center md:ml-auto md:mr-16">
            <a href="mailto:rodri.tsuchiya@gmail.com" className="hover:underline underline-offset-8">
              rodri.tsuchiya@gmail.com
            </a>
            <a href="tel:+5515991703282" className="hover:underline underline-offset-8">
              (15) 99170-3282
            </a>
          </div>
          
          <div className="opacity-50 text-center md:text-right">
            Sorocaba - SP &copy; 2024
          </div>
        </div>
      </footer>
    </>
  );
}

function DoreCard({ letter, title, text }: { letter: string, title: React.ReactNode, text: string }) {
  return (
    <FadeUp className="p-8 lg:p-16 hover:bg-black hover:text-bg transition-colors group">
      <div className="text-5xl font-bold mb-16 opacity-30 group-hover:opacity-100 transition-opacity">({letter})</div>
      <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-6 leading-tight">{title}</h3>
      <p className="text-lg leading-tight font-medium opacity-80">{text}</p>
    </FadeUp>
  );
}

function ServiceCard({ title, price, items }: { title: string, price: string, items: string[] }) {
  return (
    <FadeUp className="flex flex-col p-8 lg:p-12 hover:bg-black hover:text-bg transition-colors group">
      <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-4">{title}</h3>
      <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
        <span className="text-base font-bold block mb-2 opacity-50 uppercase tracking-widest">A partir de</span>
        {price}
      </div>
      <ul className="flex-1 space-y-4 mb-16 text-lg font-medium opacity-80">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-4">
            <ArrowRight className="w-6 h-6 shrink-0 mt-0.5" /> {item}
          </li>
        ))}
      </ul>
      <a 
        href="https://wa.me/5515991703282" 
        target="_blank" 
        rel="noopener" 
        className="w-full inline-flex items-center justify-center px-6 py-5 text-lg font-bold brutal-border rounded-full group-hover:border-bg transition-colors uppercase tracking-widest"
      >
        Solicitar Escopo
      </a>
    </FadeUp>
  );
}

function ContactSection() {
  return (
    <section className="brutal-border-b">
      <FadeUp className="px-6 py-12 md:py-16 brutal-border-b flex justify-between items-end">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">Diagnóstico</h2>
        <span className="text-2xl font-bold">1.3</span>
      </FadeUp>
      <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black">
        <div className="p-8 lg:p-20 flex flex-col justify-center bg-black text-bg">
          <FadeUp>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-10">Inicie o mapeamento dos seus processos.</h2>
            <p className="text-2xl font-medium opacity-80 leading-snug">Nossa filosofia é simples: resolver problemas reais através de código limpo e automação inteligente. Direto ao ponto.</p>
          </FadeUp>
        </div>
        <div className="p-8 lg:p-20 bg-bg">
          <form action="https://formspree.io/f/rodri.tsuchiya@gmail.com" method="POST" className="space-y-10">
            <div className="space-y-4">
              <label htmlFor="nome" className="block text-sm font-bold uppercase tracking-widest opacity-60">Nome / Empresa</label>
              <input type="text" id="nome" name="nome" required className="w-full bg-transparent brutal-border-b border-black/30 py-3 text-2xl font-medium focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20" placeholder="Sua Empresa Ltda" />
            </div>
            <div className="space-y-4">
              <label htmlFor="whatsapp" className="block text-sm font-bold uppercase tracking-widest opacity-60">WhatsApp</label>
              <input type="tel" id="whatsapp" name="whatsapp" required className="w-full bg-transparent brutal-border-b border-black/30 py-3 text-2xl font-medium focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20" placeholder="(15) 90000-0000" />
            </div>
            <div className="space-y-4">
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest opacity-60">E-mail</label>
              <input type="email" id="email" name="email" required className="w-full bg-transparent brutal-border-b border-black/30 py-3 text-2xl font-medium focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20" placeholder="nome@empresa.com" />
            </div>
            <div className="space-y-4">
              <label htmlFor="gargalo" className="block text-sm font-bold uppercase tracking-widest opacity-60">Principal Gargalo</label>
              <select defaultValue="" id="gargalo" name="gargalo" required className="w-full bg-transparent brutal-border-b border-black/30 py-3 text-2xl font-medium focus:outline-none focus:border-black transition-colors rounded-none appearance-none cursor-pointer">
                <option value="" disabled className="text-black/20">Selecione uma opção...</option>
                <option value="visibilidade" className="text-black">Falta de site / Presença digital</option>
                <option value="lentidao" className="text-black">Processos lentos e manuais</option>
                <option value="outros" className="text-black">Outro problema técnico</option>
              </select>
            </div>
            <div className="pt-8">
              <button type="submit" className="w-full inline-flex items-center justify-center px-8 py-6 text-xl font-bold bg-black text-bg rounded-full hover-invert-reverse brutal-border transition-all uppercase tracking-widest">
                Solicitar Análise <ArrowRight className="w-6 h-6 ml-3" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { 
  ArrowRight
} from "lucide-react";

const Gallery4Demo = dynamic(() => import("@/components/ui/gallery4-demo").then(mod => mod.Gallery4Demo), { ssr: false });
const GLSLHills = dynamic(() => import("@/components/ui/glsl-hills").then(mod => mod.GLSLHills), { ssr: false });
const TextScramble = dynamic(() => import("@/components/ui/text-scramble").then(mod => mod.TextScramble), { ssr: false });

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
            <GLSLHills width="100%" height="100%" />
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-end fade-up relative z-10">
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] font-bold tracking-tighter uppercase mb-8 lg:mb-0 min-h-[1.8em] md:min-h-[2.7em]">
                Sites, sistemas <br/>
                & automação <br/>
                com IA.
              </h1>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right pb-2">
              <div className="min-h-[100px] md:min-h-[120px]">
                <TextScramble className="text-lg md:text-2xl font-medium max-w-sm mb-10 leading-snug">
                  Para empresas que precisam de visibilidade ou desejam eliminar o trabalho braçal. Engenharia de software ágil, técnica e direto ao ponto.
                </TextScramble>
              </div>
              <a 
                href="https://wa.me/5515991703282?text=Ol%C3%A1%21+Vim+pelo+site+da+Tsuchiya+Tech+e+gostaria+de+falar+com+o+desenvolvedor+sobre+um+projeto" 
                target="_blank" 
                rel="noopener" 
                className="inline-flex items-center justify-center px-8 py-5 text-xl font-bold bg-black text-bg rounded-full hover-invert-reverse brutal-border transition-all uppercase tracking-wide"
              >
                Falar com Desenvolvedor <ArrowRight className="w-6 h-6 ml-3" />
              </a>
            </div>
          </div>
        </section>

        {/* 2. Dores do Cliente */}
        <section id="dores" className="brutal-border-b">
          <div className="px-6 py-12 md:py-16 brutal-border-b flex flex-col md:flex-row justify-between items-start md:items-end fade-up">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase max-w-3xl leading-none mb-4 md:mb-0">Processos lentos destroem o seu dia?</h2>
            <span className="text-2xl font-bold">1.1</span>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black fade-up">
            <div className="p-8 lg:p-16 hover:bg-black hover:text-bg transition-colors group">
              <div className="text-5xl font-bold mb-16 opacity-30 group-hover:opacity-100 transition-opacity">(A)</div>
              <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-6 leading-tight">Falta de <br/>Visibilidade</h3>
              <TextScramble className="text-lg leading-tight font-medium opacity-80">Sua empresa não é encontrada no digital, perdendo negócios diários para concorrentes com presença estruturada.</TextScramble>
            </div>
            <div className="p-8 lg:p-16 hover:bg-black hover:text-bg transition-colors group">
              <div className="text-5xl font-bold mb-16 opacity-30 group-hover:opacity-100 transition-opacity">(B)</div>
              <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-6 leading-tight">Lentidão <br/>Mecânica</h3>
              <TextScramble className="text-lg leading-tight font-medium opacity-80">Sua equipe gasta horas em tarefas operacionais manuais que poderiam ser resolvidas em segundos por um sistema.</TextScramble>
            </div>
            <div className="p-8 lg:p-16 hover:bg-black hover:text-bg transition-colors group">
              <div className="text-5xl font-bold mb-16 opacity-30 group-hover:opacity-100 transition-opacity">(C)</div>
              <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-6 leading-tight">Ausência <br/>de IA</h3>
              <TextScramble className="text-lg leading-tight font-medium opacity-80">Operar sem inteligência artificial hoje é o equivalente a usar máquina de escrever na era do computador.</TextScramble>
            </div>
          </div>
        </section>

        {/* 3. Nossos Serviços */}
        <section id="servicos" className="brutal-border-b">
          <div className="px-6 py-12 md:py-16 brutal-border-b flex justify-between items-end fade-up">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
              <TextScramble as="span">Serviços</TextScramble>
            </h2>
            <span className="text-2xl font-bold">1.2</span>
          </div>
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-black fade-up">
            
            <div className="flex flex-col p-8 lg:p-12 hover:bg-black hover:text-bg transition-colors group">
              <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-4">
                <TextScramble as="span">Site Landing Page</TextScramble>
              </h3>
              <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
                <span className="text-base font-bold block mb-2 opacity-50 uppercase tracking-widest">A partir de</span>
                <TextScramble as="span">R$ 1.000,00</TextScramble>
              </div>
              <ul className="flex-1 space-y-4 mb-16 text-lg font-medium opacity-80">
                <li className="flex items-start gap-4"><ArrowRight className="w-6 h-6 shrink-0 mt-0.5" /> <TextScramble as="span">Design responsivo e minimalista</TextScramble></li>
                <li className="flex items-start gap-4"><ArrowRight className="w-6 h-6 shrink-0 mt-0.5" /> <TextScramble as="span">Otimização para SEO</TextScramble></li>
                <li className="flex items-start gap-4"><ArrowRight className="w-6 h-6 shrink-0 mt-0.5" /> <TextScramble as="span">Integração direta com WhatsApp</TextScramble></li>
              </ul>
              <a 
                href="https://wa.me/5515991703282?text=Ol%C3%A1%21+Estava+olhando+os+servi%C3%A7os+no+site+da+Tsuchiya+Tech+e+gostaria+de+solicitar+um+escopo+com+IA" 
                target="_blank" 
                rel="noopener" 
                className="w-full inline-flex items-center justify-center px-6 py-5 text-lg font-bold brutal-border rounded-full group-hover:border-bg transition-colors uppercase tracking-widest"
              >
                Solicitar Escopo
              </a>
            </div>

            <div className="flex flex-col p-8 lg:p-12 bg-black text-bg relative group hover:bg-bg hover:text-black transition-colors">
              <div className="absolute top-8 right-8 text-xs font-bold uppercase tracking-widest px-4 py-2 brutal-border border-bg rounded-full group-hover:border-black">Mais procurado</div>
              <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-4 mt-12 lg:mt-0">
                <TextScramble as="span">Automação WhatsApp</TextScramble>
              </h3>
              <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
                <span className="text-base font-bold block mb-2 opacity-50 uppercase tracking-widest">A partir de</span>
                <TextScramble as="span">R$ 1.000,00</TextScramble>
              </div>
              <ul className="flex-1 space-y-4 mb-16 text-lg font-medium opacity-80">
                <li className="flex items-start gap-4"><ArrowRight className="w-6 h-6 shrink-0 mt-0.5" /> <TextScramble as="span">Triagem automática de leads</TextScramble></li>
                <li className="flex items-start gap-4"><ArrowRight className="w-6 h-6 shrink-0 mt-0.5" /> <TextScramble as="span">Integração com IA</TextScramble></li>
                <li className="flex items-start gap-4"><ArrowRight className="w-6 h-6 shrink-0 mt-0.5" /> <TextScramble as="span">Respostas 24 horas por dia</TextScramble></li>
              </ul>
              <a 
                href="https://wa.me/5515991703282?text=Ol%C3%A1%21+Estava+olhando+os+servi%C3%A7os+no+site+da+Tsuchiya+Tech+e+gostaria+de+solicitar+um+escopo+com+IA" 
                target="_blank" 
                rel="noopener" 
                className="w-full inline-flex items-center justify-center px-6 py-5 text-lg font-bold brutal-border border-bg rounded-full bg-bg text-black group-hover:bg-black group-hover:text-bg transition-colors uppercase tracking-widest"
              >
                Solicitar Escopo
              </a>
            </div>

            <div className="flex flex-col p-8 lg:p-12 hover:bg-black hover:text-bg transition-colors group">
              <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-4">
                <TextScramble as="span">Automação OpenClaw</TextScramble>
              </h3>
              <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
                <span className="text-base font-bold block mb-2 opacity-50 uppercase tracking-widest">A partir de</span>
                <TextScramble as="span">R$ 2.500,00</TextScramble>
              </div>
              <ul className="flex-1 space-y-4 mb-16 text-lg font-medium opacity-80">
                <li className="flex items-start gap-4"><ArrowRight className="w-6 h-6 shrink-0 mt-0.5" /> <TextScramble as="span">Integração profunda de sistemas</TextScramble></li>
                <li className="flex items-start gap-4"><ArrowRight className="w-6 h-6 shrink-0 mt-0.5" /> <TextScramble as="span">Fluxos de dados complexos</TextScramble></li>
                <li className="flex items-start gap-4"><ArrowRight className="w-6 h-6 shrink-0 mt-0.5" /> <TextScramble as="span">Mapeamento sob medida</TextScramble></li>
              </ul>
              <a 
                href="https://wa.me/5515991703282?text=Ol%C3%A1%21+Estava+olhando+os+servi%C3%A7os+no+site+da+Tsuchiya+Tech+e+gostaria+de+solicitar+um+escopo+com+IA" 
                target="_blank" 
                rel="noopener" 
                className="w-full inline-flex items-center justify-center px-6 py-5 text-lg font-bold brutal-border rounded-full group-hover:border-bg transition-colors uppercase tracking-widest"
              >
                Solicitar Escopo
              </a>
            </div>

          </div>
        </section>

        {/* Gallery Section */}
        <section id="projetos" className="brutal-border-b">
          <Gallery4Demo />
        </section>

        {/* 4. Formulário / CTA Final */}
        <section className="brutal-border-b">
          <div className="px-6 py-12 md:py-16 brutal-border-b flex justify-between items-end fade-up">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">Diagnóstico</h2>
            <span className="text-2xl font-bold">1.3</span>
          </div>
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black fade-up">
            <div className="p-8 lg:p-20 flex flex-col justify-center bg-black text-bg">
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-10">Inicie o mapeamento dos seus processos.</h2>
              <TextScramble className="text-2xl font-medium opacity-80 leading-snug">Nossa filosofia é simples: resolver problemas reais através de código limpo e automação inteligente. Direto ao ponto.</TextScramble>
            </div>
            <div className="p-8 lg:p-20 bg-bg">
              <form action="#" method="POST" className="space-y-10">
                <div className="space-y-4">
                  <label htmlFor="nome" className="block text-sm font-bold uppercase tracking-widest opacity-60">Nome / Empresa</label>
                  <input type="text" id="nome" className="w-full bg-transparent brutal-border-b border-black/30 py-3 text-2xl font-medium focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20" placeholder="Sua Empresa Ltda" />
                </div>
                <div className="space-y-4">
                  <label htmlFor="whatsapp" className="block text-sm font-bold uppercase tracking-widest opacity-60">WhatsApp</label>
                  <input type="tel" id="whatsapp" className="w-full bg-transparent brutal-border-b border-black/30 py-3 text-2xl font-medium focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20" placeholder="(15) 90000-0000" />
                </div>
                <div className="space-y-4">
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest opacity-60">E-mail</label>
                  <input type="email" id="email" className="w-full bg-transparent brutal-border-b border-black/30 py-3 text-2xl font-medium focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20" placeholder="nome@empresa.com" />
                </div>
                <div className="space-y-4">
                  <label htmlFor="gargalo" className="block text-sm font-bold uppercase tracking-widest opacity-60">Principal Gargalo</label>
                  <select defaultValue="" id="gargalo" className="w-full bg-transparent brutal-border-b border-black/30 py-3 text-2xl font-medium focus:outline-none focus:border-black transition-colors rounded-none appearance-none cursor-pointer">
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
            <TextScramble>Sorocaba - SP</TextScramble>
            <TextScramble>&copy; 2024</TextScramble>
          </div>
        </div>
      </footer>
    </>
  );
}

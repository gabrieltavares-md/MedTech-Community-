"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="bg-[#02040a] py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-content mx-auto">
        <div className="relative bg-[#080c14] border border-[rgba(0,240,255,0.12)] rounded-2xl p-10 md:p-14 overflow-hidden">
          {/* Decorative blur elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0088ff]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row md:items-center gap-10">
            {/* Text */}
            <div className="flex-1">
              <h3 className="font-serif font-light text-2xl md:text-3xl text-white tracking-tight">
                Junte-se a 1.000+ profissionais
              </h3>
              <p className="mt-3 text-sm text-[#a3b8cc] leading-relaxed max-w-md">
                Receba atualizações semanais sobre as últimas descobertas em IA médica e protocolos clínicos diretamente na sua caixa de entrada.
              </p>
            </div>

            {/* Form */}
            {submitted ? (
              <p className="text-[#00f0ff] font-medium">Obrigado! Você está na lista. ✓</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[360px]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="h-11 flex-1 px-4 bg-[#02040a] border border-[rgba(0,240,255,0.2)] rounded-input text-sm text-white placeholder:text-[#a3b8cc]/40 focus:outline-none focus:border-[#00f0ff]/60 transition-colors duration-200"
                />
                <Button type="submit" variant="primary" size="md">
                  Inscrever-se
                </Button>
              </form>
            )}
          </div>
          <p className="relative mt-4 text-xs text-[#a3b8cc]/40">Sem spam. Apenas conhecimento técnico.</p>
        </div>
      </div>
    </section>
  );
}

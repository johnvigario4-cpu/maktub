'use client'

import { ParticleBackground } from '@/components/ParticleBackground'
import { HeroSection } from '@/components/sections/HeroSection'
import { ContentSection } from '@/components/sections/ContentSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { TimelineSection } from '@/components/sections/TimelineSection'

export default function Home() {
  return (
    <>
      <ParticleBackground />

      {/* Section 1: Hero - "O Destino" */}
      <HeroSection />

      {/* Section 2: "Onde Tudo Começou" - High School */}
      <section id="section-2" className="relative bg-gradient-to-b from-transparent via-secondary/30 to-transparent">
        <ContentSection
          sectionTitle="Capítulo I"
          title="Onde Tudo Começou"
          subtitle="A High School and a Friendship Born"
          content={[
            "Numa aula comum de high school em Luanda, dois alunos se cruzaram. Não havia nada de extraordinário naquele primeiro encontro, apenas dois jovens que compartiram um espaço. Mas o destino, como sempre, tinha outros planos.",
            "Começou como muitas amizades: conversas no recreio, risos partilhados, e aquele tipo de ligação que você não consegue explicar racionalmente. John e Renata tornaram-se inseparáveis, dois amigos que se entendiam com apenas um olhar.",
            "Ninguém poderia imaginar que aquela amizade de colégio se tornaria no amor que definiria as suas vidas. Mas as sementes já estavam plantadas, e o tempo só as faria florescer.",
          ]}
        >
          <GallerySection
            sectionTitle=""
            title=""
            items={[
              {
                src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onde%20come%C3%A7ou-h7l9cBNudlITWprZlPqErM5qoew8xo.jpeg',
                alt: 'John and Renata at High School',
                caption: 'Onde tudo começou - inseparáveis desde o início',
              },
              {
                src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-14%20at%2008.53.27-cBRSsVbA2aAQn6d4RLNiO0GoGexFUt.jpeg',
                alt: 'Renata in High School',
                caption: 'Memórias de amizade e loucura',
              },
            ]}
            columns={2}
          />
        </ContentSection>
      </section>

      {/* Section 3: "A Distância Nunca Foi Um Fim" - Portugal Era */}
      <section className="relative">
        <ContentSection
          sectionTitle="Capítulo II"
          title="A Distância Nunca Foi Um Fim"
          subtitle="When She Moved to Portugal"
          content={[
            "Renata partiu para Portugal para estudar, e com ela levou metade do coração de John. A distância era real, as horas de fuso horário desafiadores, mas a ligação permanecia intacta.",
            "Chamadas de vídeo madrugadas, mensagens partilhadas ao longo do dia, e aquele tipo de amizade que se aprofundava com cada conversação. O oceano entre eles não conseguia quebrar o que estava a crescer em silêncio.",
            "Saudade. Essa palavra portuguesa que descreve a falta profunda de alguém. Essa era a constante. Mas também havia esperança, porque ambos sabiam que aquela amizade era demasiado importante para desaparecer.",
          ]}
        >
          <GallerySection
            sectionTitle=""
            title=""
            items={[
              {
                src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/distancia%202-QaDnOX73xvEjC2VklqtNj7sl9THPUG.jpeg',
                alt: 'Renata in Portugal',
                caption: 'Renata em Portugal - Vida longe, coração perto',
              },
              {
                src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/distancia%204-QQ6NhYKwLddV6eiKpIZ6YGSnN9Dl3l.jpeg',
                alt: 'Renata at Work',
                caption: 'Momentos do dia a dia partilhados',
              },
              {
                src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/distancia%205-2UhxpGUHoNJVVWzYxRxRMR530kpCsj.jpeg',
                alt: 'John in Angola',
                caption: 'John em Angola - Saudades constantes',
              },
              {
                src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/distancia%203-6Yv9NTmtcFAI4Cm0dUuHVh0P5fSRWL.jpeg',
                alt: 'John Home Moments',
                caption: 'Selfies e risadas através da distância',
              },
              {
                src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/saudades%20a%20distancia-1Qq8FXCwQdepBurwkuOYkTxT1sOS69.jpeg',
                alt: 'Saudades Messages',
                caption: 'WhatsApp - Mensagens de saudade e amor',
              },
              {
                src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/saudades%20a%20distancia%202-EZvxDCb5ELxZW4moGJp2MRqbIRU4Uj.jpeg',
                alt: 'Love Messages',
                caption: 'Declarações noturnas de amor eterno',
              },
            ]}
            columns={3}
          />
        </ContentSection>
      </section>

      {/* Section 4: "Quando a Amizade Virou Amor" */}
      <section className="relative bg-gradient-to-b from-secondary/20 to-transparent">
        <ContentSection
          sectionTitle="Capítulo III"
          title="Quando a Amizade Virou Amor"
          subtitle="The Moment Everything Changed"
          content={[
            "Não há um momento exato em que você consegue apontar e dizer 'foi aqui'. O amor não chega com trompetas e sinais. Chega silenciosamente, nos detalhes pequenos.",
            "Um olhar que durasse um bocadinho mais. Uma risada que significava mais. Mensagens que começaram a carregar um peso diferente. A amizade não desapareceu; ela transformou-se em algo mais profundo.",
            "Talvez sempre tivesse estado ali. Talvez eles tivessem sabido o tempo todo, mas precisassem de tempo para o aceitar. O amor verdadeiro raramente chega como uma surpresa; geralmente chega como um reconhecimento.",
          ]}
        >
          <GallerySection
            sectionTitle=""
            title=""
            items={[
              {
                src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cuidado%20a%20antes%20do%20namoro-624xZBseYbqTVQHJV1y9ETG8saWJRB.jpeg',
                alt: 'Care Before Dating',
                caption: 'Conversas sobre o noivado e a vida juntos',
              },
              {
                src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cuidado%20a%20antes%20do%20namoro%202-g3aSfNA5uxp2jV3ETUfuw95f7tFmap.jpeg',
                alt: 'Planning Together',
                caption: 'Escolhendo o tecido do anel - detalhes do futuro',
              },
              {
                src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cuidado%20a%20antes%20do%20namoro%203-7lAtEfrCfFSmiCuZmyOpqvme6aNwhq.jpeg',
                alt: 'First Day Talk',
                caption: 'Momentos especiais partilhados em WhatsApp',
              },
            ]}
            columns={3}
          />
        </ContentSection>
      </section>

      {/* Section 5: "O Dia Que Mudou Tudo" - Timeline */}
      <TimelineSection
        sectionTitle="Capítulo IV"
        title="O Dia Que Mudou Tudo"
        highlightedDate="02/12/2024"
        events={[
          {
            date: '2010s',
            title: 'Amizade em Luanda',
            description: 'Dois alunos se conhecem no colégio e formam uma amizade profunda que duraria para a vida toda.',
          },
          {
            date: '2018',
            title: 'Renata Parte para Portugal',
            description: 'A mudança marca o início de uma longa distância, mas a amizade permanece forte através de cada oceano.',
          },
          {
            date: '2023',
            title: 'Reconhecimento Mútuo',
            description: 'A amizade começa a revelar sentimentos mais profundos. O amor estava sempre ali, esperando pelo momento certo.',
          },
          {
            date: '02/12/2024',
            title: 'O Nosso Primeiro Dia',
            description: 'Neste dia mágico, John e Renata transformam uma amizade de anos num romance que estava destined a acontecer.',
            highlighted: true,
          },
          {
            date: '2025',
            title: 'Juntos em Pessoa',
            description: 'Renata regressa a Angola e finalmente estão fisicamente juntos, vivendo o amor que construíram durante anos.',
          },
        ]}
      />

      {/* Section 6: "Finalmente Juntos" - Physical Meetings */}
      <section className="relative bg-gradient-to-b from-transparent via-accent/20 to-transparent">
        <ContentSection
          sectionTitle="Capítulo V"
          title="Finalmente Juntos"
          subtitle="When Distance Became Memory"
          content={[
            "Depois de tanto tempo separados, finalmente estão no mesmo lugar. Não apenas em chamadas de vídeo, mas lado a lado, respirando o mesmo ar, construindo memórias físicas que vão muito além de telas.",
            "Cada momento agora é mais vívido, mais real. As mãos que se tocavam através de vídeos agora se seguram de verdade. Os abraços que faltaram durante anos agora podem ser dados livremente.",
            "Luanda e Portugal já não são cidades distantes; são parte de uma história conjunta. São os lugares onde dois corações aprenderam a bater como um.",
          ]}
        >
          <GallerySection
            sectionTitle=""
            title=""
            items={[
              {
                src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chamada%20do%20namoro-Kx5YXlhoBVKoGibkOnHlK7YrO5Z3vG.jpeg',
                alt: 'First Day Calls',
                caption: 'Chamadas de voz - 3 horas juntos finalmente',
              },
              {
                src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/finalmente%20juntos-24cIGyPLOMAWfC3jEPt6FqsIFnYJsu.jpeg',
                alt: 'Hands Together',
                caption: 'Mãos dadas - o símbolo do nosso amor',
              },
              {
                src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gravidez-wqtuQ3k76LjovAuBkYTkiLWAimo0Yu.jpeg',
                alt: 'Expecting Baby',
                caption: 'Uma nova vida em crescimento - nossa família',
              },
            ]}
            columns={3}
          />
        </ContentSection>
      </section>

      {/* Section 7: "O Noivado" - Engagement */}
      <section className="relative bg-gradient-to-b from-secondary/20 to-transparent">
        <ContentSection
          sectionTitle="Capítulo VI"
          title="Ele Pediu em Casamento"
          subtitle="The Promise of Forever"
          content={[
            "Naquele momento perfeito, John pediu a Renata em casamento. Não foram apenas palavras; foi um compromisso de uma vida inteira juntos.",
            "Com um anel brilhante no dedo, Renata disse sim. Não apenas a uma proposta, mas a um futuro cheio de promessas, de amor, e de um destino que finalmente os reuniu.",
            "O noivado é apenas o começo. É o prefácio de uma história que está apenas a começar. Porque o que Maktub escreveu é apenas o primeiro capítulo de muitos anos por vir.",
          ]}
        >
          <GallerySection
            sectionTitle=""
            title=""
            items={[
              {
                src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/noivado-PO9xL8TW7zcjRV7dwjPUwUzxYuVCBs.jpeg',
                alt: 'Engagement Celebration',
                caption: 'Noivado - O sim que mudou tudo',
              },
            ]}
            columns={1}
          />
        </ContentSection>
      </section>

      {/* Section 8: "Construindo a Nossa Família" - Future */}
      <section className="relative">
        <ContentSection
          sectionTitle="Capítulo VII"
          title="Construindo a Nossa Família"
          subtitle="Dreaming of a Future Together"
          layout="centered"
          content={[
            "Temos planos, sonhos e um futuro que queremos construir juntos. Não sabemos exatamente como será, mas sabemos que será lado a lado.",
            "Uma família formada no amor verdadeiro. Crianças que herdarão uma história de paciência, fidelidade e um tipo de amor que pode atravessar oceanos.",
            "Porque o que começou como uma amizade de colégio transformou-se em algo para toda a vida. E é disso que temos sonhado: de uma vida vivida juntos, preenchida com pequenos momentos e grandes aventuras.",
          ]}
        />
      </section>

      {/* Section 9: "Mensagem Final" - Letter */}
      <section className="relative bg-gradient-to-b from-secondary/40 to-transparent">
        <ContentSection
          sectionTitle="Epílogo"
          title="Uma Mensagem de Amor"
          layout="centered"
          content={[
            "Querida Renata,",
            "",
            "Quando te conheci no colégio, não sabia que estavas a conhecer a pessoa com quem passaria o resto da minha vida. Éramos apenas dois rapazes e raparigas que se cruzaram no corredor.",
            "",
            "Mas lendo retrospetivamente, vejo que cada momento foi importante. Cada conversa, cada risada partilhada, cada madrugada em que ficámos acordados a falar de sonhos e medos. Estava tudo escrito.",
            "",
            "A saudade durante os anos em Portugal não me afastou de ti; aproximou-me. Porque percebi que a distância não consegue quebrar o que é verdadeiro. E tu és verdadeira, Renata. Tu és a minha verdade.",
            "",
            "Agora que estamos juntos, cada dia é um privilégio. Cada manhã quando acordo e te vejo está ali é um recordar de que os milagres existem.",
            "",
            "Obrigado por acreditares em nós quando a distância era real. Obrigado por me amar quando eu ainda não sabia como amar. Obrigado por seres tu.",
            "",
            "Com todo o meu coração,",
            "John",
            "",
            "✨ Se fosse para escolher de novo, escolheria você. Em todas as vidas. ✨",
          ]}
        />
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border bg-secondary/50">
        <p className="font-playfair text-primary text-lg">MAKTUB</p>
        <p className="font-poppins text-foreground/60 text-sm mt-2">
          Our love was written in the stars
        </p>
        <p className="font-poppins text-foreground/40 text-xs mt-4">
          © 2025 John & Renata. Forever.
        </p>
      </footer>
    </>
  )
}

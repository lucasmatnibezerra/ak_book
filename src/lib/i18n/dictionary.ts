export type Language = "en" | "pt";

const en = {
  nav: {
    home: "Home",
    dsp: "Digital Signal Processing",
    ml: "Machine Learning",
    dl: "Deep Learning",
    dc: "Digital Communications",
    courses: "Courses",
    contact: "Contact",
    toggleMenu: "Toggle navigation menu",
  },
  hero: {
    titlePrefix: "Digital Signal Processing with",
    titleOr: "or",
    quote:
      "“The information age brought new possibilities to improve the learning process, which can complement the traditional lectures and homeworks.”",
    startReading: "Start reading",
    exploreCourses: "Explore courses",
  },
  home: {
    coursesEyebrow: "Learn more",
    coursesTitle: "Courses",
    courses: {
      dsp: {
        title: "Digital Signal Processing",
        description: "Filtering, sampling and spectral analysis with Python, Matlab and Octave.",
      },
      ml: {
        title: "Machine Learning",
        description: "Foundations of supervised and unsupervised learning, from regression to ensembles.",
      },
      dl: {
        title: "Deep Learning",
        description: "Neural networks, from perceptrons to convolutional and sequence models.",
      },
      dc: {
        title: "Digital Communications",
        description: "Wireless and digital communication systems, with Python, Matlab or Octave.",
      },
    },
    teamEyebrow: "The people behind it",
    teamTitle: "Meet the team",
    teamDescription:
      "The team at LASSE is made up of researchers and students dedicated to open, hands-on learning materials.",
    teamHint: "Tap a member to learn more",
    team: {
      aldebaro: {
        role: "Coordinator",
        description:
          "Ph. D. University of California at San Diego (UCSD) and Full Professor at the Federal University of Pará (UFPA)",
      },
      leonardo: {
        role: "Coordinator",
        description:
          "Ph. D. Federal University of Pará (UFPA) Professor and Vice-Director of the Faculty of Computer Engineering",
      },
      joao: {
        role: "",
        description: "Bachelor's student in Telecommunications Engineering at UFPA and researcher at LASSE",
      },
      valdinei: {
        role: "",
        description: "Bachelor's student in Computer Engineering at UFPA and researcher at LASSE",
      },
      lucas: {
        role: "",
        description: "Master's student in Electrical engineering at UFPA and researcher at LASSE",
      },
    },
  },
  footer: {
    blurb:
      "Open learning materials from LASSE, the Telecommunications, Automation and Electronics Research and Development Center at UFPA.",
    coursesHeader: "Courses",
    resourcesHeader: "Resources",
    followHeader: "Follow LASSE",
    resourceLinks: { dspBook: "DSP Book", codeRepo: "Code repository", lasse: "LASSE" },
    rights: "All rights reserved.",
  },
  pageHero: {
    dsp: {
      eyebrow: "Course",
      title: "Digital Signal Processing",
      description: "Filtering, sampling, spectral analysis and more — with Python, Matlab or Octave.",
    },
    ml: {
      eyebrow: "Course",
      title: "Machine Learning",
      description:
        "Foundations of supervised and unsupervised learning, from classic algorithms to neural networks.",
    },
    dl: {
      eyebrow: "Course",
      title: "Deep Learning",
      description:
        "Neural networks in depth — from perceptrons to convolutional, sequence and transformer models.",
    },
    dc: {
      eyebrow: "Course",
      title: "Digital Communications",
      description: "Wireless and digital communication systems — with Python, Matlab or Octave.",
    },
  },
  common: {
    startReading: "Start reading",
    slides: "Slides",
    slidesDesc: "Lecture slide decks covering each chapter of the book.",
    videos: "Videos",
    videosDesc: "Recorded video lectures for the course.",
    code: "Code & notebooks",
    codeDescBook: "Source code and Python notebooks with the book's applications and examples.",
    learningMaterials: "Learning materials",
    whatYoullLearn: "What you'll learn",
    keyApplications: "Key applications",
    comingSoon: "Coming soon",
    explore: "Explore",
    close: "Close",
  },
  pds: {
    tools: ["Python", "MATLAB", "Octave", "Jupyter", "NumPy"],
    bookTitle: "Book — Digital Signal Processing with Python, Matlab or Octave",
    bookDesc: "The full textbook, free to read online.",
    applications: [
      "Cross-correlation for signal synchronization",
      "Real-time sound processing",
      "PC sound board quantizer",
      "Power spectrum analysis",
      "Audio signal filtering",
      "Correlation analysis",
    ],
  },
  ml: {
    topics: [
      "Pattern recognition & classification",
      "Decision trees, stumps & ensembles (AdaBoost)",
      "Support vector machines",
      "Bayesian learning",
      "Neural networks & deep learning foundations",
      "Dimensionality reduction & clustering",
    ],
    slidesDesc: "Lecture slide decks covering each topic of the course.",
    codeDesc: "Python notebooks with practical machine learning applications.",
  },
  dl: {
    topics: [
      "Perceptrons & multilayer networks",
      "Convolutional neural networks",
      "Recurrent & sequence models",
      "Training, regularization & optimization",
      "Introduction to transformers",
    ],
    slidesVideosTitle: "Slides & videos",
    slidesVideosDesc: "Lecture slides and recorded video lectures for this course.",
    codeDesc: "Python notebooks with practical deep learning applications.",
  },
  dc: {
    topics: ["Modulation & coding", "Channel modeling", "MIMO & beamforming", "5G/6G network architecture", "AI for 6G"],
    bookTitle: "Book — Digital Communications with Python, Matlab or Octave",
  },
};

const pt: typeof en = {
  nav: {
    home: "Início",
    dsp: "Processamento Digital de Sinais",
    ml: "Aprendizado de Máquina",
    dl: "Aprendizado Profundo",
    dc: "Comunicações Digitais",
    courses: "Cursos",
    contact: "Contato",
    toggleMenu: "Abrir menu de navegação",
  },
  hero: {
    titlePrefix: "Processamento Digital de Sinais com",
    titleOr: "ou",
    quote:
      "“A era da informação trouxe novas possibilidades para melhorar o processo de aprendizagem, que pode complementar as aulas tradicionais e os exercícios.”",
    startReading: "Começar a ler",
    exploreCourses: "Explorar cursos",
  },
  home: {
    coursesEyebrow: "Saiba mais",
    coursesTitle: "Cursos",
    courses: {
      dsp: {
        title: "Processamento Digital de Sinais",
        description: "Filtragem, amostragem e análise espectral com Python, Matlab e Octave.",
      },
      ml: {
        title: "Aprendizado de Máquina",
        description: "Fundamentos de aprendizado supervisionado e não supervisionado, da regressão a ensembles.",
      },
      dl: {
        title: "Aprendizado Profundo",
        description: "Redes neurais, dos perceptrons a modelos convolucionais e sequenciais.",
      },
      dc: {
        title: "Comunicações Digitais",
        description: "Sistemas de comunicação sem fio e digital, com Python, Matlab ou Octave.",
      },
    },
    teamEyebrow: "Quem está por trás",
    teamTitle: "Conheça o time",
    teamDescription:
      "O time do LASSE é formado por pesquisadores e estudantes dedicados a materiais de aprendizagem abertos e práticos.",
    teamHint: "Toque em alguém para saber mais",
    team: {
      aldebaro: {
        role: "Coordenador",
        description:
          "Doutor pela Universidade da Califórnia em San Diego (UCSD) e Professor Titular da Universidade Federal do Pará (UFPA)",
      },
      leonardo: {
        role: "Coordenador",
        description:
          "Doutor pela Universidade Federal do Pará (UFPA), Professor e Vice-Diretor da Faculdade de Engenharia da Computação",
      },
      joao: {
        role: "",
        description: "Graduando em Engenharia de Telecomunicações na UFPA e pesquisador do LASSE",
      },
      valdinei: {
        role: "",
        description: "Graduando em Engenharia da Computação na UFPA e pesquisador do LASSE",
      },
      lucas: {
        role: "",
        description: "Mestrando em Engenharia Elétrica na UFPA e pesquisador do LASSE",
      },
    },
  },
  footer: {
    blurb:
      "Materiais de aprendizagem abertos do LASSE, o laboratório de Telecomunicações, Automação e Eletrônica da UFPA.",
    coursesHeader: "Cursos",
    resourcesHeader: "Recursos",
    followHeader: "Siga o LASSE",
    resourceLinks: { dspBook: "Livro de PDS", codeRepo: "Repositório de código", lasse: "LASSE" },
    rights: "Todos os direitos reservados.",
  },
  pageHero: {
    dsp: {
      eyebrow: "Curso",
      title: "Processamento Digital de Sinais",
      description: "Filtragem, amostragem, análise espectral e muito mais — com Python, Matlab ou Octave.",
    },
    ml: {
      eyebrow: "Curso",
      title: "Aprendizado de Máquina",
      description:
        "Fundamentos de aprendizado supervisionado e não supervisionado, dos algoritmos clássicos às redes neurais.",
    },
    dl: {
      eyebrow: "Curso",
      title: "Aprendizado Profundo",
      description:
        "Redes neurais em profundidade — dos perceptrons a modelos convolucionais, sequenciais e transformers.",
    },
    dc: {
      eyebrow: "Curso",
      title: "Comunicações Digitais",
      description: "Sistemas de comunicação sem fio e digital — com Python, Matlab ou Octave.",
    },
  },
  common: {
    startReading: "Começar a ler",
    slides: "Slides",
    slidesDesc: "Apresentações de aula cobrindo cada capítulo do livro.",
    videos: "Vídeos",
    videosDesc: "Videoaulas gravadas do curso.",
    code: "Código e notebooks",
    codeDescBook: "Código-fonte e notebooks Python com as aplicações e exemplos do livro.",
    learningMaterials: "Materiais de aprendizagem",
    whatYoullLearn: "O que você vai aprender",
    keyApplications: "Aplicações práticas",
    comingSoon: "Em breve",
    explore: "Explorar",
    close: "Fechar",
  },
  pds: {
    tools: ["Python", "MATLAB", "Octave", "Jupyter", "NumPy"],
    bookTitle: "Livro — Processamento Digital de Sinais com Python, Matlab ou Octave",
    bookDesc: "O livro completo, gratuito para ler on-line.",
    applications: [
      "Correlação cruzada para sincronização de sinais",
      "Processamento de som em tempo real",
      "Quantizador da placa de som do PC",
      "Análise do espectro de potência",
      "Filtragem de sinais de áudio",
      "Análise de correlação",
    ],
  },
  ml: {
    topics: [
      "Reconhecimento de padrões e classificação",
      "Árvores de decisão, stumps e ensembles (AdaBoost)",
      "Máquinas de vetores de suporte (SVM)",
      "Aprendizado bayesiano",
      "Redes neurais e fundamentos de aprendizado profundo",
      "Redução de dimensionalidade e clusterização",
    ],
    slidesDesc: "Apresentações de aula cobrindo cada tópico do curso.",
    codeDesc: "Notebooks Python com aplicações práticas de aprendizado de máquina.",
  },
  dl: {
    topics: [
      "Perceptrons e redes multicamadas",
      "Redes neurais convolucionais",
      "Modelos recorrentes e sequenciais",
      "Treinamento, regularização e otimização",
      "Introdução a transformers",
    ],
    slidesVideosTitle: "Slides e vídeos",
    slidesVideosDesc: "Slides de aula e videoaulas gravadas deste curso.",
    codeDesc: "Notebooks Python com aplicações práticas de aprendizado profundo.",
  },
  dc: {
    topics: [
      "Modulação e codificação",
      "Modelagem de canal",
      "MIMO e beamforming",
      "Arquitetura de redes 5G/6G",
      "IA para 6G",
    ],
    bookTitle: "Livro — Comunicações Digitais com Python, Matlab ou Octave",
  },
};

export const dictionary = { en, pt };
export type Dictionary = typeof en;

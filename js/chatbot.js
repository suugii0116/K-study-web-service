// AI Chatbot "Ji-Woo" Logic with Gemini API & Offline Fallback
document.addEventListener('DOMContentLoaded', () => {
  const chatbotToggle = document.getElementById('chatbot-toggle-btn');
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatbotClose = document.getElementById('chatbot-close-btn');
  const chatInput = document.getElementById('chatbot-text-input');
  const chatSendBtn = document.getElementById('chatbot-send-btn');
  const chatMessagesBody = document.getElementById('chatbot-messages-body');
  const chatChipsContainer = document.getElementById('chatbot-chips-container');
  const typingIndicator = document.getElementById('chatbot-typing-indicator');

  // Settings elements
  const settingsBtn = document.getElementById('chatbot-settings-btn');
  const settingsPanel = document.getElementById('chatbot-settings-panel');
  const saveKeyBtn = document.getElementById('save-api-key-btn');
  const apiKeyInput = document.getElementById('gemini-api-key');
  const chatStatusText = document.getElementById('chat-status-text');
  const dotStatus = document.querySelector('.dot-status');

  let isChatWindowOpen = false;
  let geminiChatHistory = []; // Keeps the active conversational memory
  const GEMINI_MODEL = 'gemini-2.5-flash';

  // Ji-Woo Knowledge Base (Bilingual Keyword Matrix - Fallback offline mode)
  const knowledgeBase = {
    en: {
      defaultGrit: "Hello! I am Ji-Woo, your K-Study Bridge advisor. How can I help you prepare for your journey to South Korea today? 🎓",
      notFound: "I'm not quite sure about that. Could you try rephrasing? Or you can book a free 1-on-1 strategic video call with our senior advisor using the consultation form at the bottom of this page! 📞",
      typingText: "Ji-Woo is typing...",
      chips: [
        "🎒 How to get a Visa?",
        "💰 Cost of Living?",
        "💵 Scholarship levels?",
        "💼 Part-time jobs?"
      ],
      topics: [
        {
          keys: ['visa', 'document', 'd2', 'd4', 'embassy', 'checklist', 'study plan'],
          response: "For South Korea, there are two primary student visas:\n• **D-4-1 (Language Program)**: Requires a frozen bank statement showing $10,000+ for 6 months, graduation certificate, and study plan.\n• **D-2 (Degree Program)**: Requires a bank statement of $20,000+, academic transcripts, and TOPIK Level 3+ or English test certificates (IELTS/TOEFL).\nAll academic credentials must be Apostilled or Legalized by the Korean Embassy!"
        },
        {
          keys: ['tuition', 'cost', 'fee', 'semester', 'price', 'expensive'],
          response: "Average tuition rates in South Korea are very competitive:\n• **Korean Language Course**: Around ₩1.6M to ₩1.8M (approx. $1,200 - $1,350 USD) per 10-week term. (Usually 4 terms per year).\n• **Degree Programs (Bachelor/Master)**: Ranges from ₩2.2M (National universities) to ₩4.2M (Private universities) per semester.\n*Top universities like KAIST offer full tuition waivers to almost all accepted global students!*"
        },
        {
          keys: ['scholarship', 'waiver', 'free', 'discount', 'topik'],
          response: "Yes, extensive scholarships are available! Most universities grant tuition waivers based on your Korean TOPIK proficiency level:\n• **TOPIK Level 3**: 30% tuition discount.\n• **TOPIK Level 4**: 50% tuition discount.\n• **TOPIK Level 5 or 6**: 70% to 100% full tuition waiver!\nAdditionally, the government-sponsored GKS (Global Korea Scholarship) covers full tuition, airfare, and monthly stipends."
        },
        {
          keys: ['housing', 'room', 'dorm', 'goshiwon', 'oneroom', 'studio', 'rent', 'accommodation'],
          response: "You have several cozy accommodation options in Korea:\n• **Dormitory**: ₩250k - ₩450k/month. Safe, on-campus, shared rooms.\n• **Goshiwon (Mini-studio)**: ₩300k - ₩550k/month. High-density private rooms, NO deposit required, includes free rice/kimchi.\n• **One-Room (Studio)**: ₩450k - ₩800k/month. Utmost privacy, but requires a high key-money deposit (₩3M - ₩10M)."
        },
        {
          keys: ['job', 'work', 'part-time', 'money', 'hourly', 'salary'],
          response: "International students holding a valid D-2 or D-4 visa can legally work part-time in Korea! You can work up to 20-30 hours per week (and unlimited hours during vacations) after completing 1 semester (6 months) of study. You need school authorization, your Alien Registration Card (ARC), and basic Korean TOPIK level is highly recommended."
        },
        {
          keys: ['arc', 'alien', 'register', 'immigration', 'card'],
          response: "Your Alien Registration Card (ARC) is the most critical document once you arrive in Korea. You must apply for it at the local Immigration Office within 90 days of arrival. You will need your Passport, Certificate of Enrollment, fee (₩30,000), and proof of residence."
        },
        {
          keys: ['contact', 'phone', 'address', 'office', 'talk', 'whatsapp', 'call', 'consult'],
          response: "We would love to speak with you! You can reach us at:\n• 📞 **Seoul Office**: +82-2-555-9080\n• 📞 **Ulaanbaatar Office**: +976-7011-0000\n• ✉ **Email**: support@kstudybridge.com\nFeel free to complete the Multi-Step form at the bottom of the page to request a free strategic video call! 🚀"
        }
      ]
    },
    mn: {
      defaultGrit: "Сайн байна уу! Намайг Жи-Ү (Ji-Woo) гэдэг, БНСУ-д суралцах зөвлөх чинь байна. Өнөөдөр Солонгос улсыг зорих таны аялалд хэрхэн туслах вэ? 🎓",
      notFound: "Уучлаарай, би энэ асуултыг сайн ойлгосонгүй. Өөр үгээр асууж үзнэ үү? Эсвэл хуудасны доод хэсэгт байрлах бүртгэлийн хуудсыг ашиглан манай ахлах зөвлөхтэй үнэ төлбөргүй 1-он-1 видео зөвлөгөө авахаар цаг товлоорой! 📞",
      typingText: "Жи-Ү бичиж байна...",
      chips: [
        "🎒 Виз мэдүүлэх заавар?",
        "💰 Сарын зардал хэд вэ?",
        "💵 Тэтгэлэг авах уу?",
        "💼 Цагийн ажил хийх үү?"
      ],
      topics: [
        {
          keys: ['виз', 'бичиг', 'бүрдүүлэлт', 'чеклист', 'd2', 'd4', 'ярилцлага', 'элсэлт'],
          response: "БНСУ-ын оюутны виз нь 2 үндсэн ангилалтай:\n• **D-4-1 (Хэлний бэлтгэл)**: Банкны баталгаа нь сүүлийн 6 сар царцсан $10,000+ байх, бүрэн дунд боловсролын диплом (ЭСЯ-ны баталгаажуулалттай), суралцах төлөвлөгөө шаардана.\n• **D-2 (Үндсэн анги)**: Сургуулиас хамаарч дансанд $20,000+ байршуулах, TOPIK 3+ эсвэл IELTS/TOEFL оноотой байна.\nБүх боловсролын бичиг баримтуудыг Апостиль эсвэл Солонгосын ЭСЯ-аар баталгаажуулсан байх шаардлагатай!"
        },
        {
          keys: ['төлбөр', 'сургалт', 'зардал', 'семестр', 'үнэ', 'үнэтэй', 'хэлний бэлтгэл'],
          response: "БНСУ-ын их дээд сургуулиудын төлбөр харьцангуй уян хатан байдаг:\n• **Хэлний бэлтгэл**: 10 долоо хоногийн нэг улирал нь ₩1.6 саяас ₩1.8 сая вон (Ойролцоогоор $1,200 - $1,350 ам.доллар). Жилд 4 улирал хичээллэдэг.\n• **Үндсэн анги (Бакалавр/Магистр)**: Улсын сургуулиуд семестрт ₩2.2 сая, хувийн сургуулиуд ₩4.2 сая вон орчим байдаг.\n*КАИСТ (KAIST) зэрэг сургуулиуд тэнцсэн гадаад оюутан бүрт 100% сургалтын төлбөрөөс чөлөөлөх тэтгэлэг олгодог!*"
        },
        {
          keys: ['тэтгэлэг', 'хөнгөлөлт', 'үнэгүй', 'topik', 'топик', 'оноо'],
          response: "Тийм ээ, Солонгост маш олон тэтгэлэг бий! Ихэнх сургуулиуд таны Солонгос хэлний TOPIK оноог үндэслэн төлбөр хөнгөлдөг:\n• **TOPIK 3 түвшин**: Төлбөрөөс 30% хөнгөлөлт.\n• **TOPIK 4 түвшин**: Төлбөрөөс 50% хөнгөлөлт.\n• **TOPIK 5 буюу 6 түвшин**: Төлбөрөөс 70%-иас 100% хүртэл бүтэн чөлөөлөх тэтгэлэг!\nҮүнээс гадна Засгийн газрын GKS тэтгэлэг нь сургалтын төлбөр, ирж очих нислэгийн тийз, сар бүрийн хэрэглээний мөнгийг бүрэн олгодог."
        },
        {
          keys: ['байр', 'өрөө', 'дотуур байр', 'гошивон', 'нэг өрөө', 'түрээс', 'сууц', 'суух', 'амьдрах'],
          response: "Оюутнуудад зориулсан нийтлэг 3 сууц байдаг:\n• **Дотуур байр**: Сард ₩250,000 - ₩450,000. Аюулгүй, кампус дотор байдаг, өрөөгөө хуваалцаж амьдарна.\n• **Гошивон (Жижиг өрөө)**: Сард ₩300,000 - ₩550,000. Сургуулийн гадна байдаг хувийн өрөө. Барьцаа мөнгө шаардахгүй, үнэгүй будаа, кимчи, рамен өгдөг.\n• **Нэг өрөө байр (Studio)**: Сард ₩450,000 - ₩800,000. Маш тохилог, гал тогоо угаалгын машин хувьдаа эзэмших ч барьцаа мөнгө (Key Money) өндөр шаардана (₩3-10 сая вон)."
        },
        {
          keys: ['ажил', 'цагийн ажил', 'мөнгө', 'хийх', 'ажиллах', 'цалин', 'хууль'],
          response: "Гадаад оюутнууд D-2 эсвэл D-4 визтэйгээр Солонгост хууль ёсоор цагийн ажил хийх бүрэн боломжтой! Ирээд эхний 6 сар (1 семестр) суралцсаны дараа сургуулиасаа зөвшөөрөл авч, долоо хоногт 20-30 хүртэл цагаар ажиллах эрхтэй. Гадаад иргэний ARC үнэмлэх авсан байх ба суурь Солонгос хэлний TOPIK оноотой бол ажил олдоход маш хялбар байдаг."
        },
        {
          keys: ['arc', 'үнэмлэх', 'гадаад иргэн', 'бүртгэл', 'иргэний үнэмлэх', 'карт'],
          response: "Гадаад иргэний үнэмлэх (ARC) нь БНСУ-д очсоны дараа хамгийн түрүүнд хийлгэх шаардлагатай баримт бичиг юм. Та Солонгост хилээр нэвтэрснээс хойш 90 хоногийн дотор орон нутгийн Цагаачлалын албанд очиж мэдүүлнэ. Бүрдүүлэх зүйлс: Гадаад паспорт, сургуулийн тодорхойлолт, хураамж (₩30,000 вон), оршин суугаа хаягийн тодорхойлолт."
        },
        {
          keys: ['холбоо', 'утас', 'дугаар', 'хаяг', 'оффис', 'ярих', 'мэйл', 'холбогдох', 'цаг', 'зөвлөгөө'],
          response: "Бидэнтэй холбогдох сувгууд:\n• 📞 **Сөүл дэх төв салбар**: +82-2-555-9080\n• 📞 **Улаанбаатар дахь салбар**: +976-7011-0000\n• ✉ **Имэйл**: support@kstudybridge.com\nМөн манай вэбсайтын доор байрлах интерактив захиалгын хуудсыг ашиглан үнэ төлбөргүй хувийн зөвлөгөө авах цагаа захиалж болно! 🚀"
        }
      ]
    },
    ko: {
      defaultGrit: "안녕하세요! 저는 K-Study Bridge의 AI 상담사 지우(Ji-Woo)입니다. 오늘 한국 유학 준비에 대해 어떤 도움을 드릴까요? 🎓",
      notFound: "죄송하지만 말씀하신 내용을 잘 이해하지 못했습니다. 질문을 다르게 표현해 주시겠어요? 또는 페이지 하단의 상담 신청서를 작성하여 전문 컨설턴트와의 무료 1대1 화상 상담을 예약하실 수 있습니다! 📞",
      typingText: "지우님이 입력 중입니다...",
      chips: [
        "🎒 비자 신청 방법은?",
        "💰 한국 생활비는?",
        "💵 장학금 혜택은?",
        "💼 유학생 파트타임 알바?"
      ],
      topics: [
        {
          keys: ['비자', '서류', 'd2', 'd4', '대사관', '체크리스트', '수학계획서', '학업계획서'],
          response: "한국 학생 비자는 크게 두 가지 유형이 있습니다:\n• **D-4-1 (일반연수 - 어학당)**: 6개월 이상 동결된 $10,000 이상의 은행 잔고증명서, 최종학력 졸업증명서, 수학계획서가 필요합니다.\n• **D-2 (유학 - 학위 과정)**: $20,000 이상의 은행 잔고증명서, 전학년 성적증명서, TOPIK 3급 이상 또는 영어 성적증명서(IELTS/TOEFL)가 필요합니다.\n모든 학력 서류는 한국 대사관의 아포스티유 또는 영사 확인을 받아야 합니다!"
        },
        {
          keys: ['등록금', '학비', '비용', '학기', '금액', '가격', '어학당비용'],
          response: "한국 대학의 등록금은 다음과 같습니다:\n• **한국어 연수 과정**: 1학기(10주) 기준 약 160만 원 ~ 180만 원 (약 $1,200 - $1,350 USD)이며, 연 4학기 제도로 운영됩니다.\n• **학위 과정 (학사/석사)**: 학기당 국공립대 약 220만 원, 사립대 약 420만 원 수준입니다.\n*KAIST 등 일부 우수 대학은 합격한 대부분의 외국인 유학생에게 등록금 전액 면제 혜택을 제공합니다!*"
        },
        {
          keys: ['장학금', '장학', '혜택', '지원금', '감면', '토피크', 'topik'],
          response: "네, 유학생을 위한 다양한 장학금 제도가 마련되어 있습니다! 많은 대학이 한국어 TOPIK 성적에 따라 등록금을 감면해 줍니다:\n• **TOPIK 3급**: 등록금 30% 감면\n• **TOPIK 4급**: 등록금 50% 감면\n• **TOPIK 5급 또는 6급**: 등록금 70% ~ 100% 전액 면제!\n또한, 한국 정부에서 지원하는 GKS(Global Korea Scholarship) 장학금을 통해 등록금 전액, 왕복 항공료, 월 생활비 지원 등을 받을 수 있습니다."
        },
        {
          keys: ['숙소', '주거', '방', '기숙사', '고시원', '원룸', '월세', '보증금'],
          response: "유학생들이 주로 선택하는 주거 형태는 다음과 같습니다:\n• **기숙사**: 월 25만 ~ 45만 원 선. 캠퍼스 내에 위치해 안전하며 공동생활을 합니다.\n• **고시원 (미니 원룸)**: 월 30만 ~ 55만 원 선. 보증금이 없으며, 개인실이 제공되고 밥과 김치, 라면 등이 무료 제공됩니다.\n• **원룸 (스튜디오)**: 월 45만 ~ 80만 원 선. 개인 프라이버시가 완벽히 보장되나 높은 보증금(약 300만 ~ 1000만 원)이 필요합니다."
        },
        {
          keys: ['알바', '아르바이트', '일', '취업', '일자리', '시급', '급여'],
          response: "D-2 또는 D-4 비자를 소지한 유학생은 한국에서 합법적으로 시간제 취업(알바)을 할 수 있습니다! 입국 후 1학기(6개월)를 이수하고 대학의 확인과 출입국사무소의 시간제 취업 허가를 받으면 주당 20~30시간(한국어 수준에 따라 상이)까지 근무가 가능합니다. 외국인등록증(ARC)이 필수적이며, 기본적인 TOPIK 성적이 있으면 좋은 알바를 구하기가 훨씬 수월합니다."
        },
        {
          keys: ['arc', '외국인등록증', '등록증', '출입국', '카드'],
          response: "외국인등록증(ARC)은 한국 입국 후 가장 중요한 신분증입니다. 입국일로부터 90일 이내에 관할 출입국관리사무소에 방문하여 신청해야 합니다. 구비 서류는 여권, 재학증명서, 신청 수수료(30,000원), 체류지 입증서류(임대차계약서 또는 기숙사 입주 확인서 등)입니다."
        },
        {
          keys: ['연락처', '전화', '주소', '사무실', '상담', '이메일', '연락', '카톡'],
          response: "언제든 편하게 문의해 주세요! 연락처는 다음과 같습니다:\n• 📞 **서울 본사**: +82-2-555-9080\n• 📞 **울란바토르 지사**: +976-7011-0000\n• ✉ **이메일**: support@kstudybridge.com\n페이지 하단의 3단계 신청서를 작성해 주시면 무료 1대1 화상 상담 일정을 바로 조율해 드립니다! 🚀"
        }
      ]
    }
  };

  // Toggle Chat Status Dot and Text
  function updateStatusIndicator() {
    const apiKey = localStorage.getItem('gemini_api_key') || '';
    const lang = window.currentLanguage || 'mn';
    const dict = translations[lang];

    if (!chatStatusText || !dotStatus) return;

    if (apiKey) {
      dotStatus.classList.add('online');
      chatStatusText.setAttribute('data-translate', 'chatStatusOnline');
      chatStatusText.textContent = dict['chatStatusOnline'] || 'AI Online';
    } else {
      dotStatus.classList.remove('online');
      chatStatusText.setAttribute('data-translate', 'chatStatusOffline');
      chatStatusText.textContent = dict['chatStatusOffline'] || 'Offline Mode';
    }
  }

  // Switch Chat Window state
  function toggleChatbot() {
    isChatWindowOpen = !isChatWindowOpen;
    if (isChatWindowOpen) {
      chatbotWindow.classList.add('active');
      chatbotToggle.style.display = 'none';
      initializeChat();
    } else {
      chatbotWindow.classList.remove('active');
      chatbotToggle.style.display = 'flex';
      if (settingsPanel) {
        settingsPanel.classList.remove('active');
      }
    }
  }

  // Generate Suggestion Chips
  function renderSuggestionChips() {
    if (!chatChipsContainer) return;
    chatChipsContainer.innerHTML = '';
    
    const lang = window.currentLanguage || 'mn';
    const chipsList = knowledgeBase[lang].chips;

    chipsList.forEach(chipText => {
      const chip = document.createElement('button');
      chip.className = 'chat-chip';
      chip.textContent = chipText;
      chip.addEventListener('click', () => {
        // Strip emoji icon from query text for chatbot matching
        const query = chipText.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, '').trim();
        handleUserMessage(query);
      });
      chatChipsContainer.appendChild(chip);
    });
  }

  // Append single message to history panel
  function appendMessage(sender, text) {
    if (!chatMessagesBody) return;

    const wrapper = document.createElement('div');
    wrapper.className = `msg-wrap ${sender === 'user' ? 'msg-user-wrap' : 'msg-bot-wrap'}`;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Format markdown bold/bullet indicators and newlines to HTML
    let formattedText = text
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/•\s(.*?)(<br>|$)/g, '• $1$2');

    wrapper.innerHTML = `
      <div class="msg-bubble ${sender === 'user' ? 'msg-user' : 'msg-bot'}">
        <p class="msg-text">${formattedText}</p>
        <span class="msg-time">${timestamp}</span>
      </div>
    `;

    chatMessagesBody.appendChild(wrapper);
    scrollToBottom();
  }

  // Scroll to bottom helper
  function scrollToBottom() {
    if (chatMessagesBody) {
      chatMessagesBody.scrollTop = chatMessagesBody.scrollHeight;
    }
  }

  // Async query handler for Google Gemini API
  async function getGeminiAIResponse(userMessage) {
    const apiKey = localStorage.getItem('gemini_api_key') || '';
    if (!apiKey) return null;

    const activeLang = window.currentLanguage || 'mn';

    const systemInstruction = `
You are "Ji-Woo" (Жи-Ү), a friendly, helpful, and highly intelligent Korean student advisor for the platform "K-Study Bridge" (Солонгос дахь суралцах гүүр).
Your goal is to guide international students (especially Mongolian students) who want to study in South Korea (higher education, degree programs D-2, or general Korean language courses D-4).

Platform Details:
- K-Study Bridge offers services: 
  1. University Finder: We guide students to top schools (e.g. SNU, Yonsei, KAIST, PNU) and filter programs.
  2. Visa Assistant: We provide checklists for D-2/D-4 student visas, bank statement requirements ($10,000 for D-4, $20,000 for D-2), transcripts, legalization.
  3. Housing Catalog: We showcase housing options: Dormitories (₩250k-₩450k/mo), Goshiwons (₩300k-₩550k/mo, no deposit, free rice/kimchi), One-room studios (₩450k-₩800k/mo, high deposit ₩3M-₩10M).
  4. Living Cost Calculator: We help estimate monthly expenses (rent, food, transport, national health insurance NHIS, personal expenses).
  5. Consultation Form: A multi-step form to book a free 1-on-1 strategic video call with senior advisors.
- Contact Info:
  - Seoul Head Office: 5F, Teheran-ro 108, Gangnam-gu, Seoul (+82-2-555-9080)
  - Ulaanbaatar Office: +976-7011-0000
  - Email: support@kstudybridge.com

Instructions:
1. Always respond in the language the user is speaking (Mongolian, English, or Korean).
2. Keep your answers concise, well-structured (use bullet points), polite, and student-friendly.
3. If they ask about services, guide them to use our interactive tools on the website (e.g., "You can use our Living Cost Calculator tab above to estimate your monthly budget!").
4. If they have complex profile questions, encourage them to fill out our "Book Your Free Strategic Consultation" form at the bottom of the page.
5. If the user talks about unrelated topics, politely guide them back to study in South Korea and K-Study Bridge.
    `;

    // Limit chat memory history to last 10 messages (5 user turns) to keep payload small
    if (geminiChatHistory.length > 10) {
      geminiChatHistory = geminiChatHistory.slice(geminiChatHistory.length - 10);
    }

    geminiChatHistory.push({
      role: "user",
      parts: [{ text: userMessage }]
    });

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: geminiChatHistory,
            systemInstruction: {
              parts: [{ text: systemInstruction }]
            },
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 800
            }
          })
        }
      );

      if (!response.ok) {
        const errData = await response.json();
        console.error("Gemini API Error details:", errData);
        throw new Error(errData.error?.message || "HTTP error " + response.status);
      }

      const data = await response.json();
      const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (replyText) {
        geminiChatHistory.push({
          role: "model",
          parts: [{ text: replyText }]
        });
        return replyText;
      } else {
        throw new Error("Empty response parts from model");
      }
    } catch (err) {
      console.error("Failed to query Gemini API:", err);
      // Remove last user message from memory on failure so history remains uncorrupted
      geminiChatHistory.pop();
      
      // Return localized warning
      if (activeLang === 'mn') {
        return `⚠️ AI хариулт авахад алдаа гарлаа. Google AI Studio-оос авсан Gemini API түлхүүр (AIza...) оруулахаа шалгана уу. (Алдаа: ${err.message})`;
      } else if (activeLang === 'ko') {
        return `⚠️ AI 응답을 가져오는 중 오류가 발생했습니다. Google AI Studio에서 발급한 Gemini API 키(AIza...)를 입력했는지 확인해 주세요. (오류: ${err.message})`;
      } else {
        return `⚠️ Failed to get AI response. Please use a Gemini API key from Google AI Studio (starts with AIza...). (Error: ${err.message})`;
      }
    }
  }

  // Simulate Ji-Woo thinking response
  async function handleUserMessage(messageText) {
    if (!messageText || messageText.trim() === '') return;

    // 1. Render User message bubble
    appendMessage('user', messageText);

    // Clear input
    if (chatInput) chatInput.value = '';

    // Hide input send buttons during bot typing
    disableInput(true);

    // Show dynamic typing indicator
    if (typingIndicator) {
      const lang = window.currentLanguage || 'mn';
      typingIndicator.querySelector('.typing-lbl').textContent = knowledgeBase[lang].typingText;
      typingIndicator.classList.add('show');
      scrollToBottom();
    }

    const apiKey = localStorage.getItem('gemini_api_key') || '';
    let responseText;

    if (apiKey) {
      // Call Google Gemini
      responseText = await getGeminiAIResponse(messageText);
    } else {
      // Offline rule fallback
      responseText = matchResponse(messageText);
      // Wait for simulated latency (1.0 second) for natural interaction
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    if (typingIndicator) {
      typingIndicator.classList.remove('show');
    }
    appendMessage('bot', responseText);
    disableInput(false);
    if (chatInput) chatInput.focus();
  }

  // Disable / Enable Inputs
  function disableInput(disabled) {
    if (chatInput) chatInput.disabled = disabled;
    if (chatSendBtn) chatSendBtn.disabled = disabled;
  }

  // Match keyword engine (Offline fallback)
  function matchResponse(text) {
    const lang = window.currentLanguage || 'mn';
    const cleanText = text.toLowerCase();
    const db = knowledgeBase[lang];

    let matchedResponse = null;

    // Loop topics and check keys match
    for (let i = 0; i < db.topics.length; i++) {
      const topic = db.topics[i];
      const match = topic.keys.some(key => cleanText.includes(key));
      if (match) {
        matchedResponse = topic.response;
        break;
      }
    }

    return matchedResponse || db.notFound;
  }

  // Greet user on first startup
  let hasInitialized = false;
  function initializeChat() {
    const lang = window.currentLanguage || 'mn';
    renderSuggestionChips();
    updateStatusIndicator();

    if (!hasInitialized) {
      // Append initial greeting from Ji-Woo
      appendMessage('bot', knowledgeBase[lang].defaultGrit);
      hasInitialized = true;
    } else {
      scrollToBottom();
    }
  }

  // Settings Panel Bindings
  if (settingsBtn && settingsPanel) {
    settingsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      settingsPanel.classList.toggle('active');
      if (settingsPanel.classList.contains('active')) {
        apiKeyInput.value = localStorage.getItem('gemini_api_key') || '';
        apiKeyInput.focus();
      }
    });
  }

  if (saveKeyBtn && apiKeyInput) {
    saveKeyBtn.addEventListener('click', () => {
      const oldKey = localStorage.getItem('gemini_api_key') || '';
      const newKey = apiKeyInput.value.trim();
      localStorage.setItem('gemini_api_key', newKey);
      
      // Clear memory context if key is modified/switched
      if (oldKey !== newKey) {
        geminiChatHistory = [];
      }

      updateStatusIndicator();
      if (settingsPanel) {
        settingsPanel.classList.remove('active');
      }
    });
  }

  // Close panel on clicks outside the panel
  document.addEventListener('click', (e) => {
    if (settingsPanel && settingsPanel.classList.contains('active')) {
      if (!settingsPanel.contains(e.target) && e.target !== settingsBtn) {
        settingsPanel.classList.remove('active');
      }
    }
  });

  // Event bindings
  if (chatbotToggle) chatbotToggle.addEventListener('click', toggleChatbot);
  if (chatbotClose) chatbotClose.addEventListener('click', toggleChatbot);

  if (chatSendBtn) {
    chatSendBtn.addEventListener('click', () => {
      if (chatInput) {
        handleUserMessage(chatInput.value);
      }
    });
  }

  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleUserMessage(chatInput.value);
      }
    });
  }

  // Define update method for language change integration
  window.updateChatbotLanguage = () => {
    renderSuggestionChips();
    updateStatusIndicator();
    // Dynamic re-greeting if chat is active and only contains greeting
    if (isChatWindowOpen && chatMessagesBody && chatMessagesBody.children.length <= 1) {
      chatMessagesBody.innerHTML = '';
      const lang = window.currentLanguage || 'mn';
      appendMessage('bot', knowledgeBase[lang].defaultGrit);
    }
  };

  // Watch for language dropdown changes
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', () => {
      setTimeout(() => {
        window.updateChatbotLanguage();
      }, 50);
    });
  }

  // Initial status check on document load
  updateStatusIndicator();
});

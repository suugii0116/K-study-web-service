// Living Cost Estimator Logic
document.addEventListener('DOMContentLoaded', () => {
  // Select sliders and numeric outputs
  const sliders = {
    rent: document.getElementById('calc-rent'),
    food: document.getElementById('calc-food'),
    transport: document.getElementById('calc-transport'),
    insurance: document.getElementById('calc-insurance'),
    personal: document.getElementById('calc-personal')
  };

  const outputs = {
    rent: document.getElementById('calc-rent-val'),
    food: document.getElementById('calc-food-val'),
    transport: document.getElementById('calc-transport-val'),
    insurance: document.getElementById('calc-insurance-val'),
    personal: document.getElementById('calc-personal-val')
  };

  const totalKRW = document.getElementById('calc-total-krw');
  const totalUSD = document.getElementById('calc-total-usd');
  const totalMNT = document.getElementById('calc-total-mnt');
  const budgetBadge = document.getElementById('calc-budget-badge');
  const budgetTip = document.getElementById('calc-budget-tip');

  // Conversion rates (approximate current standard)
  const KRW_TO_USD = 1 / 1350;
  const KRW_TO_MNT = 2.55;

  // Recommendations based on monthly spending (in KRW)
  const budgetLevels = {
    low: {
      limit: 800000,
      badgeEn: 'Thrifty Budget 🍃',
      badgeMn: 'Хэмнэлттэй төсөв 🍃',
      badgeKo: '실속형 알뜰 예산 🍃',
      class: 'badge-low',
      tipEn: 'This budget is typical for dorm living, cooking at home, and using basic public transit. A very smart and economical lifestyle!',
      tipMn: 'Энэхүү төсөв нь дотуур байранд амьдарч, хоолоо өөрөө хийж, нийтийн тээврээр зорчиход тохирно. Маш ухаалаг, хэмнэлттэй амьдралын хэв маяг!',
      tipKo: '이 예산은 기숙사 생활, 홈쿠킹, 그리고 기본적인 대중교통 이용에 적합합니다. 매우 스마트하고 경제적인 생활 방식입니다!'
    },
    mid: {
      limit: 1500000,
      badgeEn: 'Balanced & Comfortable ⚖️',
      badgeMn: 'Тэнцвэртэй & Тав тухтай ⚖️',
      badgeKo: '균형 잡힌 편안한 예산 ⚖️',
      class: 'badge-mid',
      tipEn: 'Allows you to rent a private room/goshiwon, dine out occasionally, enjoy cafe visits, and fully experience student life in Korea.',
      tipMn: 'Хувийн өрөө эсвэл гошивон түрээслэх, хааяа гадуур хооллох, кофе шоп орж, Солонгос дахь оюутны амьдралыг хангалттай мэдрэх боломжтой.',
      tipKo: '개인실이나 고시원을 렌트하고, 가끔 외식을 즐기며, 카페 방문 등 한국에서의 대학 생활을 편안하게 누릴 수 있는 예산입니다.'
    },
    high: {
      limit: Infinity,
      badgeEn: 'Premium Comfort ✨',
      badgeMn: 'Дээд зэрэглэлийн тав тух ✨',
      badgeKo: '프리미엄 최고급 예산 ✨',
      class: 'badge-high',
      tipEn: 'Ideal for renting a full one-room studio, regular dining out, shopping, hobbies, and traveling around South Korea on weekends.',
      tipMn: 'Бүрэн тохижилттой нэг өрөө байр түрээслэх, тогтмол гадуур хооллох, шоппинг хийх, амралтын өдрүүдээр Солонгосоор аялахад тохиромжтой.',
      tipKo: '단독 원룸 스튜디오 월세, 정기적인 외식, 쇼핑, 취미 생활 및 주말 국내 여행을 즐기기에 아주 이상적인 예산입니다.'
    }
  };

  // Helper to format currency
  function formatCurrency(val, currency) {
    if (currency === 'KRW') {
      return '₩' + Math.round(val).toLocaleString();
    } else if (currency === 'USD') {
      return '$' + Math.round(val).toLocaleString();
    } else if (currency === 'MNT') {
      return '₮' + Math.round(val).toLocaleString();
    }
    return val;
  }

  // Update logic
  function calculateTotal() {
    let total = 0;

    // Read slider values and update single outputs
    Object.keys(sliders).forEach(key => {
      if (sliders[key]) {
        const val = parseInt(sliders[key].value) || 0;
        total += val;
        if (outputs[key]) {
          outputs[key].textContent = formatCurrency(val, 'KRW');
        }
      }
    });

    // Update main totals
    if (totalKRW) totalKRW.textContent = formatCurrency(total, 'KRW');
    if (totalUSD) totalUSD.textContent = formatCurrency(total * KRW_TO_USD, 'USD');
    if (totalMNT) totalMNT.textContent = formatCurrency(total * KRW_TO_MNT, 'MNT');

    // Update recommendation based on language selection
    const currentLang = window.currentLanguage || 'mn';
    let selectedLevel;

    if (total <= budgetLevels.low.limit) {
      selectedLevel = budgetLevels.low;
    } else if (total <= budgetLevels.mid.limit) {
      selectedLevel = budgetLevels.mid;
    } else {
      selectedLevel = budgetLevels.high;
    }

    if (budgetBadge) {
      budgetBadge.textContent = currentLang === 'en' ? selectedLevel.badgeEn : (currentLang === 'mn' ? selectedLevel.badgeMn : selectedLevel.badgeKo);
      // Clear classes and apply appropriate color
      budgetBadge.className = 'budget-badge ' + selectedLevel.class;
    }

    if (budgetTip) {
      budgetTip.textContent = currentLang === 'en' ? selectedLevel.tipEn : (currentLang === 'mn' ? selectedLevel.tipMn : selectedLevel.tipKo);
    }
  }

  // Bind input listeners
  Object.keys(sliders).forEach(key => {
    if (sliders[key]) {
      sliders[key].addEventListener('input', calculateTotal);
    }
  });

  // Make calculateTotal globally accessible so it can be re-run on language switch
  window.recalculateLivingCosts = calculateTotal;

  // Initialize
  calculateTotal();
});

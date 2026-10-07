const root = document.querySelector('#curriculum');
const done = JSON.parse(localStorage.getItem('poTechDone') || '[]');

// 실제로 콘텐츠가 준비된 Day만 여기에 추가합니다.
// Day 3을 만들면 [1, 2, 3]처럼 숫자만 추가하면 됩니다.
const AVAILABLE_DAYS = [1, 2, 3];

COURSE.forEach(([part, days]) => {
  const section = document.createElement('section');
  section.className = 'part';

  section.innerHTML = `
    <h3>${part}</h3>
    <div class="days">
      ${days.map(([n, title]) => {
        const available = AVAILABLE_DAYS.includes(n);
        const completed = done.includes(n);
        return `
          <a
            class="day ${available ? 'active' : 'locked'}"
            ${available ? `href="day.html?day=${n}"` : ''}
          >
            <span class="day-num">DAY ${String(n).padStart(2, '0')}</span>
            <span>${title}${completed ? ' · ✓ 완료' : available ? '' : ' · 준비중'}</span>
          </a>
        `;
      }).join('')}
    </div>
  `;

  root.appendChild(section);
});

document.querySelector('#progressText').textContent = `${done.length} / 30 Days`;
document.querySelector('#progressBar').style.width = `${done.length / 30 * 100}%`;

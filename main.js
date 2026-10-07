import './style.css';

const P = [
    { id: 'P01', d: '17 Dec 2023', k: 'travel', l: 'Goa', t: 'Goa Trip', c: 'Goa beach', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80' },
    { id: 'P02', d: '17 Dec 2023', k: 'cafe', l: 'Goa', t: 'Goa Trip', c: 'Café outside', img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80' },
    { id: 'P03', d: '17 Dec 2023', k: 'cafe', l: 'Goa', t: 'Goa Trip', c: 'Small café', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80' },
    { id: 'P04', d: '17 Dec 2023', k: 'travel', l: 'Goa', t: 'Goa Trip', c: 'Street near café', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80' },
    { id: 'P05', d: '18 Dec 2023', k: 'birthday', l: 'Goa', t: 'Goa Trip', c: 'Dinner with friends', img: 'https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?auto=format&fit=crop&w=900&q=80' },
    { id: 'P06', d: '18 Dec 2023', k: 'travel', l: 'Goa', t: 'Goa Trip', c: 'Sunset', img: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=900&q=80' },
    { id: 'P07', d: '16 Dec 2023', k: 'travel', l: 'Goa', t: 'Goa Trip', c: 'Market', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80' },
    { id: 'P08', d: '16 Dec 2023', k: 'cafe', l: 'Goa', t: 'Goa Trip', c: 'Coffee', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80' },
    { id: 'P09', d: '20 Dec 2023', k: 'travel', l: 'Goa', t: 'Goa Trip', c: 'Return day', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80' },
    { id: 'P10', d: '04 Nov 2023', k: 'medicine', l: 'Home', t: 'Sick Period', c: 'Medicine on bedside', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80' },
    { id: 'P11', d: '06 Nov 2023', k: 'medicine', l: 'Home', t: 'Sick Period', c: 'Medicine box', img: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=900&q=80' },
    { id: 'P12', d: '08 Nov 2023', k: 'medicine', l: 'Home', t: 'Sick Period', c: 'Thermometer + medicine', img: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=900&q=80' },
    { id: 'P13', d: '12 Nov 2023', k: 'medicine', l: 'Clinic', t: 'Sick Period', c: 'Doctor visit', img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80' },
    { id: 'P14', d: '15 Oct 2023', k: 'birthday', l: 'Home', t: 'Birthday', c: 'Birthday', img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80' },
    { id: 'P15', d: '01 Oct 2023', k: 'travel', l: 'Amritsar', t: 'Weekend', c: 'Weekend trip', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80' },
    { id: 'P16', d: '08 Jan 2024', k: 'travel', l: 'Delhi', t: 'Work', c: 'Office commute', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80' }
];

let anchor = P[0], mode = 'day';

window.show = function(id) { 
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); 
    document.getElementById(id).classList.add('active'); 
    window.scrollTo(0, 0);
};

function q(id) { return document.getElementById(id); }

function renderAnchors() { 
    const ids = ['P01', 'P10', 'P14', 'P15', 'P16', 'P07', 'P09', 'P04']; 
    q('anchors').innerHTML = ids.map(id => { 
        const p = P.find(x => x.id === id); 
        return `<div class="card" onclick="choose('${p.id}')"><img src="${p.img}" alt=""><div class="meta">${p.c} &middot; ${p.d}</div></div>`; 
    }).join('');
}

window.choose = function(id) { 
    anchor = P.find(x => x.id === id); 
    q('aimg').src = anchor.img; 
    q('atitle').textContent = anchor.c; 
    q('ameta').textContent = anchor.d + ' · ' + anchor.l + ' · ' + anchor.t; 
    window.show('s2');
};

function score(p) { 
    const a = new Date(anchor.d), b = new Date(p.d); 
    const days = Math.round(Math.abs((b - a) / 86400000)); 
    let s = 0; 
    if (p.t === anchor.t) s += 45; 
    if (p.l === anchor.l) s += 25; 
    s += Math.max(0, 30 - Math.min(days, 30)); 
    if (p.k === anchor.k) s += 6; 
    return { s, days };
}

window.drift = function(force) { 
    if (force) mode = force; 
    let out = P.filter(p => p.id !== anchor.id)
               .map(p => ({ p, ...score(p) }))
               .filter(x => mode === 'day' ? (x.days <= 1 && x.p.l === anchor.l) : mode === 'trip' ? (x.p.t === anchor.t && x.days <= 7) : x.p.l === anchor.l)
               .sort((a, b) => b.s - a.s)
               .slice(0, 12); 
    q('rtitle').textContent = mode === 'day' ? 'Photos from ' + anchor.d : mode === 'trip' ? 'Photos from the ' + anchor.t.toLowerCase() : 'Photos near ' + anchor.l; 
    q('rsub').textContent = out.length + ' candidate photos · anchor: ' + anchor.c; 
    q('reason').textContent = mode === 'day' ? 'same-day proximity' : mode === 'trip' ? 'same-trip proximity' : 'same-location proximity'; 
    q('results').innerHTML = out.map(x => `<div class="card" onclick="candidate('${x.p.id}')"><img src="${x.p.img}" alt=""><div class="meta">${x.p.d} · ${x.days} day${x.days === 1 ? '' : 's'} away</div></div>`).join(''); 
    window.show('s3');
};

window.candidate = function(id) { 
    window.toast(['P02', 'P03', 'P08'].includes(id) ? '✓ Retrieval successful — user recognized the target photo.' : 'Candidate opened — keep drifting until the memory clicks.');
};

window.toast = function(msg) { 
    const t = q('toast'); 
    t.textContent = msg; 
    t.classList.add('show'); 
    setTimeout(() => t.classList.remove('show'), 2200);
};

document.addEventListener('DOMContentLoaded', () => {
    const driftBtn = q('drift');
    if (driftBtn) {
        driftBtn.onclick = () => window.drift();
    }
    
    document.querySelectorAll('.opt').forEach(o => o.onclick = () => { 
        mode = o.dataset.mode; 
        document.querySelectorAll('.opt').forEach(x => x.classList.remove('sel')); 
        o.classList.add('sel');
    }); 
    
    renderAnchors();
});

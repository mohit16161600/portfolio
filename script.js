/* ========== Minimal JS: Typewriter, Reveal, Smooth Nav, Tiny Particles ========== */

document.addEventListener('DOMContentLoaded', () => {
    // year
    document.getElementById('year').textContent = new Date().getFullYear();
  
    // Simple nav toggle for mobile
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('.nav');
    navToggle?.addEventListener('click', () => { nav.style.display = nav.style.display === 'flex' ? '' : 'flex'; });
  
    // Smooth scroll on anchor click + active link switching
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
        document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
        link.classList.add('active');
      });
    });
  
    // IntersectionObserver reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(ent => {
        if(ent.isIntersecting) ent.target.classList.add('active');
      });
    }, {threshold:0.12});
  
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  
    // Typewriter (rotating words)
    const tw = document.getElementById('typewriter');
    if(tw){
      const arr = JSON.parse(tw.dataset.text);
      let i=0, idx=0, forward=true;
      const typeSpeed=60, wait=1200;
      function tick(){
        const word = arr[i];
        const current = word.slice(0, idx);
        tw.textContent = current;
        if(forward){
          if(idx < word.length) { idx++; setTimeout(tick,typeSpeed); }
          else { forward=false; setTimeout(tick,wait); }
        } else {
          if(idx>0) { idx--; setTimeout(tick,30); }
          else { forward=true; i=(i+1)%arr.length; setTimeout(tick,200); }
        }
      }
      tick();
    }
  
    // Contact form dummy submit
    document.getElementById('contact-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks! Message sent (demo). I will contact you soon — Mohit.');
      e.target.reset();
    });
  
    // download cv (demo)
    document.getElementById('download-cv')?.addEventListener('click', () => {
      alert('Demo: CV download. Replace this with actual file link.');
    });
  
    // Simple particles: create small floating dots
    const pWrap = document.getElementById('particles');
    if(pWrap){
      for(let i=0;i<35;i++){
        const d = document.createElement('div');
        d.className = 'p-dot';
        const size = Math.random()*4 + 2;
        d.style.width = d.style.height = size+'px';
        d.style.left = (Math.random()*100)+'%';
        d.style.top = (Math.random()*100)+'%';
        d.style.opacity = (Math.random()*0.6 + 0.1).toString();
        d.style.position = 'absolute';
        d.style.background = 'rgba(255,255,255,0.06)';
        d.style.borderRadius = '50%';
        d.style.transform = `translate3d(0,0,0)`;
        pWrap.appendChild(d);
        // float animation
        const dur = Math.random()*10+6;
        d.animate([{transform:'translateY(0px)'},{transform:`translateY(${20+Math.random()*80}px)`},{transform:'translateY(0px)'}], {duration: dur*1000, iterations: Infinity, direction:'alternate', easing:'ease-in-out', delay: Math.random()*3000});
      }
    }
  });
  
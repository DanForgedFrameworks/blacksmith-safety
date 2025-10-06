// Quiz enhancement + small helpers
document.querySelectorAll('.quiz').forEach(q => {
  const feedback = q.querySelector('.feedback');
  q.querySelectorAll('button[data-answer]').forEach(btn => {
    btn.addEventListener('click', () => {
      const correct = btn.getAttribute('data-answer') === 'true';
      feedback.textContent = correct ? '✅ Correct — nice!' : '❌ Not quite — try again.';
      feedback.setAttribute('aria-live','polite');
    });
  });
});

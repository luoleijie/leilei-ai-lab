document.addEventListener('DOMContentLoaded', () => {
  const actionBtn = document.getElementById('actionBtn');
  const messageBox = document.getElementById('messageBox');

  actionBtn.addEventListener('click', () => {
    const isHidden = messageBox.classList.contains('hidden');
    
    if (isHidden) {
      messageBox.classList.remove('hidden');
      actionBtn.textContent = '收起提示';
    } else {
      messageBox.classList.add('hidden');
      actionBtn.textContent = '探索实验室';
    }
  });
});
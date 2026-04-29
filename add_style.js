const style = document.createElement('style');
style.textContent = `
  section.bg-alt .hamburger span,
  section[style*="background: var(--color-bg-alt)"] .hamburger span {
    background: #2e2a26 !important;
  }
  section.bg-alt .sidebar-icon,
  section[style*="background: var(--color-bg-alt)"] .sidebar-icon {
    color: #2e2a26 !important;
  }
`;
document.head.appendChild(style);

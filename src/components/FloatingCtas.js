import './FloatingCtas.css';

const items = [
  { label: 'Inquire', href: '#contact', icon: 'ⓘ' },
  { label: 'Visit', href: '#contact', icon: '⌖' },
  { label: 'Apply', href: '#contact', icon: '✎' },
];

function FloatingCtas() {
  return (
    <div className="floating-ctas" aria-label="Quick actions">
      {items.map((item) => (
        <a key={item.label} className="floating-btn" href={item.href}>
          <span className="icon">{item.icon}</span>
          <span className="text">{item.label}</span>
        </a>
      ))}
    </div>
  );
}

export default FloatingCtas;

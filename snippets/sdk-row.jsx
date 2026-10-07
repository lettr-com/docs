export const SdkRow = ({ name, icon, href, install }) => {
  const [copied, setCopied] = useState(false);
  const commandRef = useRef(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(install);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard API unavailable (insecure context, denied permission):
      // select the command so the reader can copy it by hand.
      const range = document.createRange();
      range.selectNodeContents(commandRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  return (
    <div className="sdk-row">
      <span className="sdk-row__logo" aria-hidden="true">
        <Icon icon={icon} size={20} />
      </span>
      <a className="sdk-row__name" href={href} target="_blank" rel="noopener noreferrer">
        {name}
        <span className="sdk-row__sr"> on GitHub (opens in a new tab)</span>
      </a>
      <button
        type="button"
        className="sdk-row__install"
        onClick={copy}
        title={install}
        aria-label={`Copy install command for ${name}`}
      >
        <code ref={commandRef}>{install}</code>
        <span className="sdk-row__copy" data-copied={copied} aria-hidden="true">
          {copied ? (
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
              <path d="M3 8.5l3 3 7-7" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="5.25" y="5.25" width="8.5" height="8.5" />
              <path d="M10.75 5.25V2.25h-8.5v8.5h3" />
            </svg>
          )}
        </span>
      </button>
      <span className="sdk-row__sr" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
      <svg className="sdk-row__arrow" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <path d="M5 11L11 5M6 5h5v5" />
      </svg>
    </div>
  );
};

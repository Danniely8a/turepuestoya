export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5804241833450?text=Hola%20Tu%20Repuesto%20Ya%2C%20quisiera%20consultar%20por%20un%20repuesto"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float fixed right-[23px] bottom-[23px] z-[25] w-[62px] h-[62px] rounded-full bg-[#25d366] text-white no-underline grid place-items-center shadow-[0_13px_30px_#1482434d] hover:scale-110 transition-transform"
    >
      <span className="wa-tooltip absolute right-[72px] bg-white text-[var(--i)] text-[13px] font-[700] py-[10px] px-[13px] rounded-[11px] whitespace-nowrap shadow-[var(--sh)] hidden md:block">
        ¿Necesitas ayuda?
      </span>
      <svg viewBox="0 0 32 32" width="34" height="34" fill="white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.054 9.378L1.054 31.25l6.118-1.982A15.907 15.907 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.316 22.594c-.39 1.1-1.93 2.014-3.16 2.27-.836.176-1.926.316-5.594-1.2-4.692-1.918-7.71-6.72-7.94-7.026-.222-.306-1.868-2.49-1.868-4.75s1.18-3.37 1.6-3.83c.39-.46.852-.574 1.134-.574.282 0 .564.002.812.014.26.012.61-.098.948.722.39.954 1.326 3.24 1.44 3.47.114.23.19.5.038.806-.15.31-.282.5-.526.77-.244.27-.464.476-.708.766-.214.25-.456.52-.188.962.268.44 1.192 1.968 2.56 3.188 1.76 1.57 3.184 2.058 3.74 2.286.452.184.722.154.99-.092.274-.252 1.16-1.35 1.47-1.83.308-.48.62-.4 1.052-.24.436.16 2.75 1.296 3.22 1.532.47.236.782.354.898.55.116.196.116 1.14-.274 2.24z"/>
      </svg>
    </a>
  );
}

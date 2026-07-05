import { useT } from "../i18n";

const footer = () => {
  const t = useT()

  return (
    <footer className="border-t border-white/8 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-4 pb-4 lg:py-9 flex flex-col lg:flex-row justify-between items-center font-mono text-[11px] text-[#949494]">
        <div>{t('footer.copy')}</div>
      </div>
    </footer>
  );
};

export default footer;

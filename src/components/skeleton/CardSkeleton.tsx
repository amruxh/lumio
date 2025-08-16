const CardSkeleton = () => {
  return (
    <div className="md:max-w-[270px] w-full max-h-[370px] flex md:flex-col flex-row justify-between bg-[var(--card-background)] gap-3 rounded-lg animate-skeleton">
      <div className="rounded-lg object-contain min-w-1/3 max-w-1/3 md:max-w-full md:h-40 bg-[var(--foreground-muted)]/10"></div>
      <div className="flex-grow-1 flex gap-2 flex-col justify-between md:justify-end">
        <div className="w-full h-6 bg-[var(--foreground-muted)]/10 rounded-md"></div>
        <div className="w-full h-6 bg-[var(--foreground-muted)]/10 rounded-md"></div>
        <div className="flex flex-col justify-between items-start">
          <div className="h-5 w-20 mb-2 bg-[var(--foreground-muted)]/10 rounded-sm"></div>
          <div className="h-5 w-full bg-[var(--foreground-muted)]/10 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
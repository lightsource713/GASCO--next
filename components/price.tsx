
const Price = ({
  amount,
  className,
  currencyCode = 'SAR',
}: {
  amount: string;
  className?: string;
  currencyCode: string;
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} className={className}style={{fontSize:25}}>
    {`${new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol'
    }).format(parseFloat(amount))}`}
  </p>
);

export default Price;

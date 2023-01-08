export interface IPromocode {
   title: string;
   discount: number;
   key: string;
}

export const promocodes: IPromocode[] = [
   {
      title: 'Rolling scopes school',
      discount: 10,
      key: 'rs',
   },
   {
      title: 'EPAM Systems',
      discount: 20,
      key: 'epm',
   },
   {
      title: 'Kozyrev Nikita',
      discount: 30,
      key: 'koz',
   },
   {
      title: 'Dzekanski Maksim',
      discount: 35,
      key: 'dzek',
   },
];

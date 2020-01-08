interface ICategory {
  cid: number
  icon: string
  text: string
}
interface IMainStore {
  categories: ICategory[]
  notice: string
}

export { ICategory, IMainStore }

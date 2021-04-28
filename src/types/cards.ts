export interface TextLine {
  label: string,
  content: string
}

export interface HomeInformationCardEntry {
  title: string,
  subtitle: string,
  rightText?: string,

  description: string,
  addlLines: TextLine[]
}

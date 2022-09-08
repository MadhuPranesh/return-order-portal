export class ProcessRequest {
  public userName: string;
  public contactNumber: number;
  public componentType: string;
  public componentName: string;
  public noOfComponents: number;
  public isPriorityOne: string;
  public defectiveDetails: string;
  public returnOrReplacement: string;

  constructor(
    userName: string,
    contactNumber: number,
    componentType: string,
    componentName: string,
    noOfComponents: number,
    isPriorityOne: string,
    defectiveDetails: string,
    returnOrReplacement: string
  ) {
    (this.userName = userName),
      (this.componentName = componentName),
      (this.componentType = componentType),
      (this.contactNumber = contactNumber),
      (this.noOfComponents = noOfComponents),
      (this.isPriorityOne = isPriorityOne),
      (this.defectiveDetails = defectiveDetails),
      (this.returnOrReplacement = returnOrReplacement);
  }
}

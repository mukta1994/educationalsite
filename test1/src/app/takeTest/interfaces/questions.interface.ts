export interface questions{
     qid:string;
     question:string;
     answer:string;
     subject:string;
     opt:Opt[];

}

export interface Opt {
   num: string;
   selected:boolean;
}
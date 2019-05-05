import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { answers } from './interfaces/answers.interface';
import { questions } from './interfaces/questions.interface';
import { ToastrService } from 'ngx-toastr';  
import { saveAs } from 'file-saver';
import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'app-home',
  templateUrl: './takeTest.component.html',
  styleUrls: ['./takeTest.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  subject:string;
  title = 'test1';
  subjects=["maths","science"]
  ans: answers[] = [];
  viewAnswer = false;
  submitted=false

  //obj=[];
  ngOnInit(){
    this.subject="maths";
    this.filteredQuestionsList("maths")
  }
  
  obj: any[] = [
    {
      "qid": "1",
      "subject": "maths",
      "question": "12 - 8 = ?",
      "opt": [{
        "num": "5", "selected": false
      }, {
        "num": "4", "selected": false
      }, {
        "num": "7", "selected": false
      }, {
        "num": "8", "selected": false
      }],
      "answer": "4"
    }, 
    {
      "qid": "2",
      "subject": "maths",
      "question": "The number of 3-digit numbers divisible by 6, is",
      "opt": [{
        "num": "129", "selected": false
      }, {
        "num": "150", "selected": false
      }, {
        "num": "370", "selected": false
      }, {
        "num": "231", "selected": false
      }],
      "answer": "150"
    },
    {
      "qid": "3",
      "subject": "maths",
      "question": " What is 1004 divided by 2?",
      "opt": [{
        "num": "510", "selected": false
      }, {
        "num": "500", "selected": false
      }, {
        "num": "300", "selected": false
      }, {
        "num": "502", "selected": false
      }],
      "answer": "502"
    },
    {
      "qid": "4",
      "subject": "science",
      "question": "How far away is the sun?",
      "opt": [{
        "num": "93 million miles away", "selected": false
      }, {
        "num": "70 million miles away", "selected": false
      }, {
        "num": "9 million miles away", "selected": false
      }, {
        "num": "30 million miles away", "selected": false
      }],
      "answer": "93 million miles away"
    },
    {
      "qid": "5",
      "subject": "science",
      "question": "How many teeth an adult has ?",
      "opt": [{
        "num": "31", "selected": false
      }, {
        "num": "34", "selected": false
      }, {
        "num": "32 ", "selected": false
      }, {
        "num": "37", "selected": false
      }],
      "answer": "32"
    },
    {
      "qid": "6",
      "subject": "science",
      "question": "How many colors are there in rainbow?",
      "opt": [{
        "num": "7 colors", "selected": false
      }, {
        "num": "4 colors", "selected": false
      }, {
        "num": "9 colors", "selected": false
      }, {
        "num": "3 colors", "selected": false
      }],
      "answer": "7 colors"
    }
  ];
   isTrue = true;
subQue=[];


// arrayBuffer:any;
// file:File;
// incomingfile(event) 
//   {
//     console.log(event);
//   this.file= event.target.files[0]; 
//   }

//   newJson:questions[]=[];
//   optionList=[]
//   testingJson=[];
  
//  Upload() {
//       let fileReader = new FileReader();
//         fileReader.onload = (e) => {
//             this.arrayBuffer = fileReader.result;
//             var data = new Uint8Array(this.arrayBuffer);
//             var arr = new Array();
//             for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
//             var bstr = arr.join("");
//             var workbook = XLSX.read(bstr, {type:"binary"});
//             var first_sheet_name = workbook.SheetNames[0];
//             var worksheet = workbook.Sheets[first_sheet_name];
//             console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
//             this.testingJson=XLSX.utils.sheet_to_json(worksheet,{raw:true});

//             for(var k=0;k<this.testingJson.length;k++){
//               this.optionList=[];
//               this.optionList.push({num:this.testingJson[k].opt1,selected:false});
//                             this.optionList.push({num:this.testingJson[k].opt2,selected:false})
//                             this.optionList.push({num:this.testingJson[k].opt3,selected:false})
//                             this.optionList.push({num:this.testingJson[k].opt4,selected:false})

//               this.newJson.push({ qid: this.testingJson[k].questionId, question: this.testingJson[k].question, 
//                             answer:this.testingJson[k].answer,subject:this.testingJson[k].subject,opt:this.optionList });
                            
//             }
//             this.obj=this.newJson;
//             console.log(this.newJson)
//             this.filteredQuestionsList("maths");
//         }
//         fileReader.readAsArrayBuffer(this.file);
// }









  filteredQuestionsList(subjectt) {
    this.subQue= this.obj.filter(v => v.subject === subjectt)
    console.log(this.subQue)
}

  toggleChild(name: string, id: string, list: Array<string>, selected) {
    const queInd = this.subQue.findIndex(e => e.qid === id)
    for (var i = 0; i < 4; i++) {
      if (name == this.subQue[queInd].opt[i].num) {
        if (!selected)
          this.subQue[queInd].opt[i].selected = true;
        else
          this.subQue[queInd].opt[i].selected = false;


        const ind = this.ans.findIndex(e => e.qid === this.subQue[queInd].qid)
        if (ind >= 0 && this.subQue[queInd].opt[i].selected) {
          //this.ans[ind].sanswer=this.obj[id].options[i].num
          this.ans.find(e => e.qid === this.subQue[queInd].qid).sanswer = this.subQue[queInd].opt[i].num;
        }
        else {
          if (this.subQue[queInd].opt[i].selected)
            this.ans.push({ qid: id, sanswer: name, canswer: this.subQue[queInd].answer })
          else
            this.ans.splice(ind, 1);

        }
      }

      else
        this.subQue[queInd].opt[i].selected = false;
    }

    //console.log(this.ans);
  }
  timer:any;
  display=false;
  counts:any;
  onSubmit() {
    this.toastr.success("Submitted successfully");
    this.display = true;
        this.submitted=true;
    var count = 0;
    this.timer = setTimeout(() => {
      this.display = false;
  }, 2000);
    for (var j = 0; j < this.ans.length; j++) {
      if (this.ans[j].canswer == this.ans[j].sanswer) {
        count++;
      }
    }
    this.counts=count;

    var submittedFile = new Blob([document.getElementById('excelData').innerHTML], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
      });
    saveAs(submittedFile , "(test).xls");

    // alert(count + " answer(s) are correct out of " + this.subQue.length)
  }
 
  viewAns() {
    this.viewAnswer = !this.viewAnswer;
  }


}

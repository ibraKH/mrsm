import React, { useState } from 'react';
import { render } from 'react-dom';
import './Gpa.css';


const Gpa = () => {
    const [gpaType, setGpaType] = useState(false);
    const [gpaTypeValue, setGpaTypeValue] = useState(4);
    const [subject, setSubject] = useState([{grade : "A+", hours : 3, id : 0}]);
    const [totalGrade, setTotalGrade] = useState("");
    const [totalHours, setTotalHours] = useState("");
    const [gpa, setGpa] = useState(4);
    const [cgpa, setCgpa] = useState(4);
    const [hideGpa, setHideGpa] = useState(true);
    const [alertGpa , setAlertGpa ] = useState(true);
    const [alertHours , setAlertHours ] = useState(true);


    const Checking = (e) => {
        setGpaType(!gpaType);
        setGpaTypeValue(e.target.value);
    };

    const deleteSubject = (index) => {
        let arr = [...subject];
        arr.splice(index, 1);
        setSubject(arr);
    }

    const addSubject = () => {
        let id = Math.floor(Math.random() * 100);
        let random = Math.floor(Math.random() * 50);
        id = random + id;
        setSubject([
            ...subject,
            {grade : "A+", hours : 3, id : id}
        ])
    }



    const addGrade = (e , index) => {
        let arr = subject;
        arr[index].grade = e.target.value;
        setSubject(arr);
    }

    const addTotalGrade = (e) => {
        setTotalGrade(e.target.value);
    }

    const addTotalHours = (e) => {
        setTotalHours(e.target.value);
    }

    const addHours = (e , index) => {
        let arr = subject;
        arr[index].hours = e.target.value;
        setSubject(arr);
    }

    const calculateGpa = () => {
        if(totalGrade === ""){
            if(totalHours === ""){
                setAlertHours(false);
            }
            setAlertGpa(false);
            return;
        }else if(totalHours === ""){
            setAlertHours(false);
            return;
        }

        setAlertGpa(true);
        setAlertHours(true);


        let arr = subject;
        const hours = [];
        let final = [];
        arr.map(x => {
            hours.push(x.hours);
        });
        const grades = [];
        arr.map(x => {
            grades.push(x.grade);
        });
        for(let i = 0; i < grades.length; i++){
            let points;
            if(gpaTypeValue === 4){
                if(grades[i] === "A+"){
                    points = 4 * parseInt(hours[i]);
                    final.push(points);
                }else if(grades[i] === "A"){
                    points = 3.75 * parseInt(hours[i]);
                    final.push(points);
                }
                if(grades[i] === "B+"){
                    points = 3.5 * parseInt(hours[i]);
                    final.push(points);
                }else if(grades[i] === "B"){
                    points = 3 * parseInt(hours[i]);
                    final.push(points);
                }
                if(grades[i] === "C+"){
                    points = 2.5 * parseInt(hours[i]);
                    final.push(points);
                }else if(grades[i] === "C"){
                    points = 2 * parseInt(hours[i]);
                    final.push(points);
                }
                if(grades[i] === "D+"){
                    points = 1.5 * parseInt(hours[i]);
                    final.push(points);
                }else if(grades[i] === "D"){
                    points = 1 * parseInt(hours[i]);
                    final.push(points);
                }else if(grades[i] === "F"){
                    points = 0 * parseInt(hours[i]);
                    final.push(points);
                }
            }else{
                if(grades[i] === "A+"){
                    points = 5 * parseInt(hours[i]);
                    final.push(points);
                }else if(grades[i] === "A"){
                    points = 4.75 * parseInt(hours[i]);
                    final.push(points);
                }
                if(grades[i] === "B+"){
                    points = 4.5 * parseInt(hours[i]);
                    final.push(points);
                }else if(grades[i] === "B"){
                    points = 4 * parseInt(hours[i]);
                    final.push(points);
                }
                if(grades[i] === "C+"){
                    points = 3.5 * parseInt(hours[i]);
                    final.push(points);
                }else if(grades[i] === "C"){
                    points = 3 * parseInt(hours[i]);
                    final.push(points);
                }
                if(grades[i] === "D+"){
                    points = 2.5 * parseInt(hours[i]);
                    final.push(points);
                }else if(grades[i] === "D"){
                    points = 2 * parseInt(hours[i]);
                    final.push(points);
                }else if(grades[i] === "F"){
                    points = 1 * parseInt(hours[i]);
                    final.push(points);
                }
            }
        }

        const totalHoursSemester = hours.reduce((a,b) => parseInt(a) + parseInt(b), 0);
        const totalGradesSemester = final.reduce((a,b) => parseFloat(a) + parseFloat(b), 0);

        const semester = totalGradesSemester / totalHoursSemester;
        setGpa(semester.toFixed(2));
        setHideGpa(false);

        const sumOfHours = totalHoursSemester + parseInt(totalHours);
        const sumOfGrades = totalGradesSemester + parseFloat(totalGrade);
        setTotalHours(sumOfHours);
        setTotalGrade(sumOfGrades);

        const fullSemesters = sumOfGrades / sumOfHours;
        setCgpa(fullSemesters.toFixed(2));
    }
  return (
    <div className='gpaParent'>
        <div className="gpaInfo">
            <h1 className='ar gpaInfoTitle' data-aos="fade-down">حساب المعدل</h1>
            <p className='ar' data-aos="fade-up">في هذي الصفحة يمكنك حساب معدلك الفصلي و التراكمي , في حال كان هذا فصلك الأول الدراسي أكتب صفر في كلا الخانتين الساعات و النقاط</p>
        </div>
        <div className="gpaCard">
            <h3 className='en gpaTypeText' data-aos="fade-down">GPA</h3>
            <div className="gpaType" data-aos="fade-down">
                <div className="fourGpa">
                    4
                    <input type="radio" name="gpaType" id="four" checked={!gpaType} onChange={Checking} value="4" />
                </div>
                <div className="fiveGpa">
                    5
                    <input type="radio" name="gpaType" id="five" checked={gpaType} onChange={Checking} value="5" />
                </div>
            </div>
            <div className="totalHours" data-aos="fade-right">
                <p className='ar'>: عدد الساعات السابقة</p>
                <input type="text" name="totalGrade" dir='rtl' className={alertHours ? 'gpaTotalInputs' : "uncomplete gpaTotalInputs"} onChange={addTotalHours} value={totalHours} />
            </div>
            <div className="totalPoints" data-aos="fade-left">
                <p className='ar'>: النقاط</p>
                <input type="text" name="totalGrade" dir='rtl' className={alertGpa ? 'gpaTotalInputs' : "uncomplete gpaTotalInputs"} onChange={addTotalGrade} value={totalGrade} />
            </div>
        </div>
        <div className="subjectsContainer" dir="rtl">
            {subject.map((x, i) => {
                return(
                    <div className="subjectCard" key={x.id} data-aos="fade-up">
                        { i !== 0 ? <div className="close" onClick={() => deleteSubject(i)}>
                            <img src="/icons/close.svg" alt="" />
                        </div> : ""}
                        <h2 className='ar'>المادة {i + 1}</h2>
                        <div className="subjectGrade">
                            <h3 className='ar' dir='ltr'> : التقدير</h3>
                            <select className='selectGrade' dir='ltr' onChange={e => addGrade(e, i)} defaultValue="A+">
                                <option value="A+">A+</option>
                                <option value="A">A</option>
                                <option value="B+">B+</option>
                                <option value="B">B</option>
                                <option value="C+">C+</option>
                                <option value="C">C</option>
                                <option value="D+">D+</option>
                                <option value="D">D</option>
                                <option value="F">F</option>
                            </select>
                        </div>
                        <div className="subjectHours">
                            <h3 className='ar'>الساعات : </h3>
                            <input type="number" name="subjectHours" onChange={e => addHours(e, i)} />
                        </div>
                    </div>
                )
            })}
            {subject.length < 10 ? <div className="newSubject" onClick={addSubject}>
                <img src="/icons/add.svg" alt="add icon" />
            </div> : "" }
        </div>
        <div className="gpaSubmit">
            <button className='ar' onClick={calculateGpa}>أحسب المعدل</button>
        </div>
        <div className={alertHours ? "hide" :"alerts"}>
            <h4 className='ar'>الرجاء كتابة عدد الساعات السابقة</h4>
        </div>
        <div className={alertGpa ? "hide" :"alerts"}>
            <h4 className='ar'>الرجاء كتابة النقاط</h4>
        </div>
        <div className={hideGpa ? "hide" : "yourGrade"}>
            <div className="totalGpa">
                <h3 className='ar' dir='rtl'>معدلك الفصلي : </h3>
                <h4 className='gradeNumber'>{gpa}</h4>
            </div>
            <div className="totalCgpa">
                <h3 className='ar' dir='rtl'>معدلك التراكمي : </h3>
                <h4 className='gradeNumber'>{cgpa}</h4>
            </div>
        </div>
    </div>
  )
}

export default Gpa;
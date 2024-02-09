import Student from "./Student";

// admin, developer, tester, executive, support


const School = ({name}) => {

//     let showStudent = false;

//     console.log(2>5 ? "hello" : "hi");
//     console.log(2>5 ?? "just");

//    return (
//         <>
//             {
//                  showStudent ?? "name"
//             }

//             {
//                  showStudent ? "name" : "not available"
//             }

//         </>
//    )

    let students = ['raj','ramesh','a','hello']

    return (
        <>
        <p>School Name: {name}</p>
         <Student studentDetails={students}></Student>
        </>

    )
}

export default School;
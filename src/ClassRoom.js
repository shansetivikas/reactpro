import Student from "./Student";

const ClassRoom = ({schlname}) => {
    // let students = ['ravi', 'raju']
    let students = [
        {
            name:'Ravi',
            age: 30,
            gender: 'male'
        },
        {
            name: 'Raju',
            age:20,
            gender:'male'
        }
    ]
    return (
        <>
         <p>{schlname}</p>
         <Student stdnames={students}></Student>
        </>
    )
}

export default ClassRoom;
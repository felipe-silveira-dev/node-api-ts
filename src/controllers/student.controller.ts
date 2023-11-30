export default class StudentController {
    index(req: any, res: any) {
        const students = [
            {
                id: 1,
                name: 'John Doe',
                email: '',
            },
            {
                id: 2,
                name: 'Jane Doe',
                email: '',
            },
        ];

        res.json(students);
    }
}

export const studentController = new StudentController();
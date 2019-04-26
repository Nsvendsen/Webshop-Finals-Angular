// This user matches the DTO from the backend
export class User {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    zipCode: number;
    email: string;
    confirmedEmail: boolean;
    gender: boolean; //True is male False is female.

    //Relation to payment info
}
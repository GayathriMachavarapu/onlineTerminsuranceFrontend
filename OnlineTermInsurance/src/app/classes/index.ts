import { DateFilterFn } from "@angular/material/datepicker";

export class AdminDto{
    adminId!:number;
    email!:string;
    userId!:number
}

export class UserDto{
    userId!:number;
    userName!:string;
    password!:string;
    role!:string

}
export class PolicyDto{
    policyId!:number;
    policyName!:string;
    totalAmount!:number;
    termAmount!:number;
    claimingAmount!:number;
    customerId!:number
}
export class PolicyResponse{
    policyId!:number;
    policyName!:string;
    totalAmount!:number;
    termAmount!:number;
    claimingAmount!:number
    
}
export class PaymentDto{
    paymentId!:number;
    paymentDate!:Date;
    paymentStatus!:string;
    amountPaid!:number;
    customerId!:number;
    policyId!:number
}
export class customer{
    userName!: string;
    firstName!:string;
    lastName!:string
    email!: string;
    password!: string;
    dob!:string;
    contactNumber!: DoubleRange;
    gender!:string;
    address!: string;
    income!:number;
    employment!:string

    
}
export class customerResponse{
    customerId!:number
    policies!: PolicyDto[];
    // payments!:PaymentDto[];
}
export class customerRequest{
    userName!: string;
    firstName!:string;
    lastName!:string
    email!: string;
    dob!:string;
    contactNumber!: string;
    gender!:string;
    income!:number;
    address!: string;
    employment!:string

}
export class userResponse{
    userName!: string;
    password!:string
}
export class adminResponse{
    userName!: string;
    password!:string
    

    
}
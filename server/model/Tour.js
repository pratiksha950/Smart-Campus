import {Schema,model} from "mongoose";

const TourSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    cities:{
        type:[String],
        default:[],
    },
    photos:{
        type:[
            String
        ],
        default:[]
    },
    user:{
        type:Schema.Types.ObjectId, 
        ref:"User",
        required:true
    },
        startDate:{
        type:Date,
    },
    endDate:{
    type:Date,
    }

},{timestamps:true})

const Tour=model("Tour",TourSchema);

export default Tour

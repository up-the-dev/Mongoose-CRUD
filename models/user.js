import { APP_URL } from '../config'
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    basicProfile: {
        firstName: String,
        lastName: String,
        fullname: {
            type: String,
            get: (fullname) => {
                return `${this.basicProfile.firstName} + ' ' +${this.basicProfile.lastName}`
            }
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            minlength: 6
        },
        role: {
            type: String,
            default: "customer"
        }
    },
    dateOfBirth: {
        day: Number,
        month: Number,
        year: Number,
        dateOfBirth: {
            type: Date,
            get: (dateOfBirth) => {
                return `${this.basicProfile.dateOfBirth.day} + '-' + ${this.basicProfile.dateOfBirth.month} + '-' + ${this.basicProfile.dateOfBirth.year}`
            }
        }
    },
    gender: String,
    marritalStatus: String,
    addressInfo: [{
        addressType: String,
        addressLine1: String,
        addressLine2: String,
        addressLine3: String,
        landmark: String,
        country: String,
        state: String,
        district: String,
        tehsil: String,
        city: String,
        pincode: Number
    }],
    contactInfo:
    {
        contactType: String,
        contactNumber: String
    },
    electronicContactInfo:
    {
        electronicType: String,
        electronicValue: String,
    },
    identityInfo: {
        identityType: String,
        identityNumber: Number,
        dateOfIssue: String,
        expiryDate: {
            type: Date,
        },
        image: {
            type: String,
            get: (image) => {
                return `${APP_URL}/${image}`
            }
        }
    },
    qualifications: {
        board: String,
        University: String,
        qualificationLevel: String,
        qualificationType: String,
        institution: String,
        examSeatNumber: String,
        yearOfPassing: Number,
        marksObtained: Number,
        totalMarks: Number,
        percentage: Number,
        isCurrent: {
            type: Boolean,
            default: false
        },
        image: {
            type: String,
            get: (image) => {
                return `${APP_URL}/${image}`
            }
        }
    },
    socailReservation:
    {
        category: String,
        subcategory: String,
        cast: String
    },
    languages: [{
        type: String
    }],
    skills: [{
        type: String
    }],
    interests: {
        type: String
    },
    medicalProfile: {
        bloodGroup: String,
        height: String,
        weight: String,
        isDisabled: {
            type: Boolean,
            default: false
        },
        disabilityInfo: {
            type: String,
            image: {
                type: String,
                required: true,
                get: (image) => {
                    return `${APP_URL}/${image}`
                },
            },
            percentage: Number,
            Dueto: String
        },
        workExperience: [{
            name: String,
            experience: Number
        }],
        isActive: {
            type: Boolean,
            default: true
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    }
}, { timestamps: true, toJSON: { getters: true } })

export const User = new mongoose.model("User", userSchema, 'users')

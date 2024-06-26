const { Schema } = require('mongoose');

const userSchema = Schema({
    name: { type: String, required: true, trim: true },
    email: {
        type: String, required: true, trim: true, validate: {
            validate: (email) => {
                const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return emailRegex.test(email);
            },
            message: 'Invalid email format',
        }
    },
    passwordHash: { type: String, required: true },
    street: String,
    apartment: String,
    city: String,
    zip: String,
    country: String,
    phone: { type: String, required: true, trim: true },
    isAdmin: { type: Boolean, default: false },
    resetPasswordOtp: Number,
    restPasswordOtpExpires: Date,
    resetPasswordOtpExpires: { type: Date },
    wishList: [
        {
            productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
            productName: { type: String, required: true },
            productImage: { type: String, required: true },
            productPrice: { type: Number, required: true },
        }
    ]
});

userSchema.index({ email: 1 }, { unique: true });

exports.User = mongoose.model('User', userSchema);


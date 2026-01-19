import mongoose from 'mongoose';
export declare const Movie: mongoose.Model<{
    name: string;
    description: string;
    rating: number;
    releaseDate: NativeDate;
    duartion: number;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    description: string;
    rating: number;
    releaseDate: NativeDate;
    duartion: number;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    description: string;
    rating: number;
    releaseDate: NativeDate;
    duartion: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    description: string;
    rating: number;
    releaseDate: NativeDate;
    duartion: number;
}, mongoose.Document<unknown, {}, {
    name: string;
    description: string;
    rating: number;
    releaseDate: NativeDate;
    duartion: number;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    name: string;
    description: string;
    rating: number;
    releaseDate: NativeDate;
    duartion: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        name: string;
        description: string;
        rating: number;
        releaseDate: NativeDate;
        duartion: number;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        name: string;
        description: string;
        rating: number;
        releaseDate: NativeDate;
        duartion: number;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    description: string;
    rating: number;
    releaseDate: NativeDate;
    duartion: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    description: string;
    rating: number;
    releaseDate: NativeDate;
    duartion: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const User: mongoose.Model<{
    role: "user" | "admin";
    email: string;
    password: string;
    name?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    role: "user" | "admin";
    email: string;
    password: string;
    name?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    role: "user" | "admin";
    email: string;
    password: string;
    name?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    role: "user" | "admin";
    email: string;
    password: string;
    name?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    role: "user" | "admin";
    email: string;
    password: string;
    name?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    role: "user" | "admin";
    email: string;
    password: string;
    name?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        role: "user" | "admin";
        email: string;
        password: string;
        name?: string | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        role: "user" | "admin";
        email: string;
        password: string;
        name?: string | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    role: "user" | "admin";
    email: string;
    password: string;
    name?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    role: "user" | "admin";
    email: string;
    password: string;
    name?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map
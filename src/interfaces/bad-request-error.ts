export interface BadRequestError {
    errors: Errors;
}

export interface Errors {
    value:   Value;
    path:    string;
    type:    string;
    params:  Params;
    errors:  string[];
    inner:   any[];
    name:    string;
    message: string;
}

export interface Params {
    value:             string;
    originalValue:     string;
    path:              string;
    spec:              Spec;
    disableStackTrace: boolean;
    type:              string;
}

export interface Spec {
    strip:             boolean;
    strict:            boolean;
    abortEarly:        boolean;
    recursive:         boolean;
    disableStackTrace: boolean;
    nullable:          boolean;
    optional:          boolean;
    coerce:            boolean;
}

export interface Value {
    description: string;
    complete:    string;
}

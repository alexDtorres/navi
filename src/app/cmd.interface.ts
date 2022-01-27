interface Proc<P> {
    pid?: P;
    Args: Array<Arg<P>>;
}

interface Arg<Q> {
    Link: Q;
}

export interface Cmd {
    Apply: Proc<string>;
}
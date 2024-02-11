import {TaskModel} from '../../models'

export namespace TasksContextTypes {
    export type Props = {
        children: JSX.Element;
    }

    export type Context = {
        totalTask: number;
        totalTaskCompleted: number;
        tasks: TaskModel[];
        completedTask: TaskModel[];
        openFormTask: () => void;
        createTask: ( tasks: TaskModel ) => void;
        checkUncheckCompleted: ( id: string, check: boolean ) => void;
    }

}
import { IonCheckbox, IonButton } from '@ionic/react';
import { DateTime } from 'luxon';
import { useTasks } from '../../../hooks';
import { TaskItemType } from './TaskItem.type';
import './TaskItem.scss';

export function TaskItem(props: TaskItemType.Props) {
    const { task } = props;
    const { checkUncheckCompleted, deleteTask } = useTasks();

    const formatDate = (date: Date): string => {
        const time = new Date(date);
        return time.toISOString();
    };

    const onClickCheckbox = (event: any) => {
        const isChecked = event.detail.checked;
        checkUncheckCompleted(task.id, isChecked);
    };

    const onDeleteTask = () => {
        deleteTask(task.id); 
    };

    return (
        <div className='task-item'>
            <div className='task-item__info'>
                <span>{task.description}</span>
                <span>
                    {DateTime.fromISO(formatDate(task.created_at)).toRelative()}
                </span>
            </div>
            <IonCheckbox checked={task.completed} onIonChange={onClickCheckbox} />
            <IonButton onClick={onDeleteTask} fill="clear">X</IonButton>
        </div>
    );
}
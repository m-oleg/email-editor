import { useQuery } from '@tanstack/react-query'
import parse from 'html-react-parser'
import { emailService } from '../../services/email.service'
import styles from './EmailList.module.scss'

export function EmailList() {
    const {data} = useQuery({
        queryKey: ['email list'],
        queryFn: () => emailService.getEmails()
    })

    return(
        <div className={styles.list}>
            <h2>Email list</h2>
            {data?.map(email => (
            <div key={email.id}>{parse(email.text)}</div>
            ))}        
        </div> 
    ) 
}
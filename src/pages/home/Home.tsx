import { EmailEditor } from '../../components/email-editor/EmailEditor'
import { EmailList } from '../../components/email-list/EmailList'

export function Home() {
    return (
        <div className="email-editor">
            <EmailEditor />
            <EmailList />
        </div>
    )    
}
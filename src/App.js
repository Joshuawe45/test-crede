import React ,{useState} from 'react';
import Flascardlist from './Flascardlist';
import './App.css'
function App() {

  const [flashcards,setFlashcards]=useState(FLASHCARDS)
  return (
    <>
    <div class="header">
    <h1 className="heading"> AWS Cloud Assement Matrix</h1>
    </div>
    <div className="container">
   <Flascardlist flashcards={flashcards}/>
   </div>
   </>
  )
}

const FLASHCARDS=[
  {
    id:1,
    question: "EC2",
    logo: 'https://miro.medium.com/max/750/1*q6F0j8HFHd8jeYXyQBqrCQ.jpeg',
    options:[
      ' 1. Have you categorized your EC2 to proper subnets and secured with VPC?',
      ' 2. Does Your EC2 Runs with root Privilege?',
      '3. Do you have proper naming policy in place?',
      '4. Do you have policy to bring down instances, when not in use?',
      '5. Have you enabled proper roles to access EC2 instances?',
      '6. Have you enabled termination protection for and instance to protect from accidental termination?',
'7. Have you enabled Monitoring for each instance to learn its behaviour?',
'8. Are you running sensitive EC2\'s in Dedicated instances?'
    ]
  },
  
  {
    id:2,
    question: "S3",
    logo: 'https://www.cloudsavvyit.com/p/uploads/2019/06/55634f08.png?width=1198&trim=1,1&bg-color=000&pad=1,1',
    options:[
      '1. Have you blocked public access for Bucket?',
      '2. Are you using Proper ACL\'s or Policies for public access?',
      '3. Did you enabled Versioning for sensitive buckets?',
      '4. Did you enabled Encryption for objects inside Buckets?',
      '5. Did you checked bucket for compliance and security measures? (If you Copied a bucket from another region)							',
      '6. Are you using strong keys and algorithm for encryption?	',
      '7. Have you enabled MFA for bucket Deletion?',
      '8. Are you using S3 Object lock?	',
      '9. Do you have identity based access to buckets? (Least privilege policy)',
      '10. Are you audinting Bucket access?'
    ]
  },
  {
    id:3,
    question: "AWS Identity & Access Management",
    logo: 'https://i0.wp.com/sra.io/wp-content/uploads/2020/01/AWS-IAM-Exploitation.png?fit=1102%2C620&ssl=1',
    options:[
      '1. Did you secured your root account with MFA/Hard token?',
      '2. Do you have define Users and roles?',
      '3. Have you Enabled MFA for Users?',
      '4. Are you providing proper ADMIN privilege only for essential users?',
      '5. Are you rotating you IAM access Keys Periodically?',
      '6. Are you assigng new users to a security group, instead of directly creating new policy for each new user?							',
      '7. Are you assigning strict resource access to each users?',
      '8. Do you have strong Password Policy for users?',							
    ]
  },
  {
    id:4,
    question: "AWS RDS",
    logo: 'https://p2zk82o7hr3yb6ge7gzxx4ki-wpengine.netdna-ssl.com/wp-content/uploads/Amazon-RDS-1.png',
    options:[
      '1. Have you put restricted access to RDS?',
      '2. Have you encrypted your DB storage?	',
      '3. Do you have users categorized to security groups?',
      '4. Have you placed IAM + DB Credentilas for login?',
      '5. Have you place DB in proper Subnet?',
      '6. Do you have a public IP for RDS?',
      '7. Do you still use default credentials for DB?',
      '8. Did you enabled Auto update for RDS services running?',
      '9. Have you enabled SSL for RDS endpoints? (protect data in transit)',
      '10. Have you kept snapshots and instances private?'					
    ]
  },
  {
    id:5,
    question: "AWS Secret Manager",
    logo: 'https://eadn-wc03-4064062.nxedge.io/cdn/wp-content/uploads/2021/03/c-1.png',
    options:[
      '1. Are you protecting credentials information?	',
      '2. Do you rate limit in place for credential/Secret manager?',
      '3. Have you enabled Logging and monitoring for Secrets manager access?	',
      '4. Are you running secrets manager service inside VPC only?',
      '5. Are you hard coding your credentials in environment variables?'					
    ]
  },
  {
    id:6,
    question: "AWS VPC",
    logo: 'https://miro.medium.com/max/2570/1*YcNHxdrbPlV-lWjN_0Ek3g.png',
    options:[
      '1. Have you enabled Virtual firewall for all VPC?',
      '2. Are you aware of open ports inside services?',
      '3. Do you have restrictions on IP ranges using Security groups?',
      '4. Do you network audit policy in place?',
      '5. Are you monitoring your VPC traffic flow?',
      '6. Do you have any Unused VPC Gateway or end point running?'						
    ]
  }
  

]
export default App;

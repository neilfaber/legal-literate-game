
import React, { useState } from 'react';
import { FileText, Download, Search, ChevronRight, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import TemplateViewer from './TemplateViewer';
import { toast } from '@/hooks/use-toast';

interface Template {
  id: string;
  title: string;
  category: string;
  description: string;
  complexity: 'Simple' | 'Medium' | 'Complex';
  content: string;
}

const templates: Template[] = [
  {
    id: 'rental-agreement',
    title: 'Residential Rental Agreement',
    category: 'Housing',
    description: 'A standard lease agreement for residential property rentals, covering terms, conditions, and responsibilities.',
    complexity: 'Medium',
    content: `RESIDENTIAL RENTAL AGREEMENT

THIS AGREEMENT made this [DAY] day of [MONTH], [YEAR], between [LANDLORD NAME] (hereinafter referred to as "Landlord") and [TENANT NAME] (hereinafter referred to as "Tenant").

1. PROPERTY
Landlord hereby leases to Tenant, and Tenant hereby leases from Landlord, for residential purposes only, the premises located at [PROPERTY ADDRESS] ("the Premises").

2. TERM
The term of this Agreement shall be for [TERM LENGTH], commencing on [START DATE] and ending on [END DATE].

3. RENT
Tenant agrees to pay, without demand, to Landlord as rent for the Premises the sum of $[AMOUNT] per month, in advance, on the [DAY] day of each calendar month.

4. SECURITY DEPOSIT
Tenant shall pay to Landlord the sum of $[AMOUNT] as a security deposit.

5. UTILITIES
Tenant shall be responsible for the payment of all utilities and services to the Premises, except for [UTILITIES COVERED BY LANDLORD], which shall be paid by Landlord.

6. USE OF PREMISES
The Premises shall be used and occupied by Tenant exclusively as a private residence. Neither the Premises nor any part thereof shall be used at any time during the term of this Agreement for any purpose other than as a private residence.

7. MAINTENANCE AND REPAIRS
Tenant shall be responsible for all repairs required due to Tenant's misuse, waste, or neglect. Landlord shall be responsible for all other maintenance and repairs.

8. ASSIGNMENT AND SUBLETTING
Tenant shall not assign this Agreement or sublet any portion of the Premises without prior written consent of the Landlord.

9. RIGHT OF ENTRY
Landlord and Landlord's agents shall have the right to enter the Premises at reasonable times for the purpose of inspecting the Premises, making necessary repairs, or showing the Premises to prospective tenants or purchasers.

10. TERMINATION
At the expiration of the term of this Agreement, Tenant shall surrender the Premises in as good a state and condition as they were at the commencement of this Agreement, reasonable use and wear and tear excepted.

11. GOVERNING LAW
This Agreement shall be governed by the laws of the State of [STATE].

IN WITNESS WHEREOF, the parties have executed this Agreement on the day and year first above written.

_________________________
Landlord

_________________________
Tenant`,
  },
  {
    id: 'consumer-complaint',
    title: 'Consumer Complaint Letter',
    category: 'Consumer Rights',
    description: 'A formal complaint letter template for consumers to address issues with products or services.',
    complexity: 'Simple',
    content: `[YOUR NAME]
[YOUR ADDRESS]
[CITY, STATE ZIP]
[DATE]

[COMPANY NAME]
[COMPANY ADDRESS]
[CITY, STATE ZIP]

RE: Complaint Regarding [PRODUCT/SERVICE]

Dear [RECIPIENT'S NAME/CUSTOMER SERVICE DEPARTMENT]:

I am writing to express my dissatisfaction with [PRODUCT/SERVICE] that I purchased on [DATE] from your [STORE LOCATION/WEBSITE]. The [PRODUCT/SERVICE] [DESCRIBE THE PROBLEM IN DETAIL].

[DESCRIBE WHAT HAPPENED, WHEN IT HAPPENED, WHO WAS INVOLVED, AND WHY YOU'RE DISSATISFIED. BE FACTUAL AND AVOID EMOTIONAL LANGUAGE.]

When I discovered this problem, I contacted [NAME OF PERSON, DEPARTMENT, DATE, LOCATION] and was told that [EXPLAIN WHAT YOU WERE TOLD]. This response was unsatisfactory because [EXPLAIN WHY YOU WERE NOT SATISFIED WITH THE RESPONSE].

To resolve this problem, I would like [STATE THE SPECIFIC ACTION YOU WANT - REFUND, REPLACEMENT, REPAIR, ETC.]. Enclosed are copies of my [RECEIPTS, CONTRACTS, WORK ORDERS, CANCELLED CHECKS, ETC.].

I look forward to your response and a resolution to my problem. I will wait [SET A TIME LIMIT] before seeking third-party assistance. Please contact me at the above address or by phone at [YOUR PHONE NUMBER].

Sincerely,

[YOUR SIGNATURE]

[YOUR PRINTED NAME]

Enclosures: [LIST THE DOCUMENTS YOU'RE ATTACHING]`,
  },
  {
    id: 'power-of-attorney',
    title: 'General Power of Attorney',
    category: 'Personal Documents',
    description: 'A legal document allowing someone to act on your behalf for specified matters.',
    complexity: 'Complex',
    content: `GENERAL POWER OF ATTORNEY

KNOW ALL PERSONS BY THESE PRESENTS:

That I, [PRINCIPAL NAME], residing at [PRINCIPAL ADDRESS], hereby appoint [AGENT NAME], residing at [AGENT ADDRESS], as my true and lawful Attorney-in-Fact ("Agent").

GRANT OF AUTHORITY:
I hereby grant to my Agent full power and authority to act on my behalf in all matters, including, without limitation:

1. REAL ESTATE: To lease, sell, mortgage, purchase, exchange, and acquire, and to agree, bargain, and contract for the lease, sale, purchase, exchange, and acquisition of, and to accept, take, receive, and possess any real property whatsoever, tangible or intangible, or interest therein, on such terms as my Agent shall deem proper.

2. FINANCIAL POWERS: To open, maintain, or close bank accounts (including, but not limited to, checking accounts, savings accounts, and certificates of deposit) and other investment accounts; to conduct bank transactions, including the signing of checks and drafts, the deposit and withdrawal of funds, and the endorsement of checks and other negotiable instruments.

3. BUSINESS INTERESTS: To conduct, participate in, and transact any and all lawful business of whatever nature or kind on my behalf.

4. TAX MATTERS: To prepare, sign, and file federal, state, and local income, gift, and other tax returns and other governmental reports, certificates, declarations, or statements relating to taxes.

5. PERSONAL MATTERS: To do all acts necessary for maintaining my customary standard of living, to provide living quarters as my Agent may deem necessary by purchase, lease, or other arrangement, and to maintain my existing membership and affiliations.

INTERPRETATION AND GOVERNING LAW:
This instrument is to be construed and interpreted as a General Power of Attorney. The enumeration of specific powers herein is not intended to, nor does it, limit or restrict the general powers granted to my Agent. This Power of Attorney shall be governed by the laws of the State of [STATE].

EFFECTIVE DATE AND TERMINATION:
This Power of Attorney shall become effective immediately and shall remain in full force and effect until my death or until I revoke it in writing.

THIRD PARTY RELIANCE:
Third parties may rely upon the representations of my Agent as to all matters relating to any power granted to my Agent, and no person who may act in reliance upon the representations of my Agent or the authority granted to my Agent shall incur any liability to me or my estate as a result of permitting my Agent to exercise any power.

IN WITNESS WHEREOF, I have executed this Power of Attorney on this [DAY] day of [MONTH], [YEAR].

________________________
[PRINCIPAL NAME], Principal

STATE OF [STATE] )
                 ) ss.
COUNTY OF [COUNTY] )

On this [DAY] day of [MONTH], [YEAR], before me personally appeared [PRINCIPAL NAME], to me known to be the person described in and who executed the foregoing instrument and acknowledged that he/she executed the same as his/her free act and deed.

________________________
Notary Public
My Commission Expires: [DATE]`,
  },
  {
    id: 'small-claims',
    title: 'Small Claims Court Filing',
    category: 'Legal Proceedings',
    description: 'Forms and instructions for filing a case in small claims court for minor disputes.',
    complexity: 'Medium',
    content: `SMALL CLAIMS COURT COMPLAINT

IN THE SMALL CLAIMS COURT OF [COUNTY] COUNTY, [STATE]

CASE NO. ______________

[PLAINTIFF NAME]
[PLAINTIFF ADDRESS]
[PLAINTIFF PHONE]
Plaintiff,

vs.

[DEFENDANT NAME]
[DEFENDANT ADDRESS]
[DEFENDANT PHONE]
Defendant.

COMPLAINT

1. Plaintiff resides at [PLAINTIFF ADDRESS], and Defendant resides at [DEFENDANT ADDRESS].

2. The Defendant owes Plaintiff $[AMOUNT] for the following reason(s):
   [CLEARLY DESCRIBE THE DISPUTE - WHY THE DEFENDANT OWES YOU MONEY, WHAT GOODS OR SERVICES WERE PROVIDED, WHEN THE INCIDENT OCCURRED, ETC.]

3. Plaintiff has demanded payment from the Defendant, but Defendant has refused to pay.

WHEREFORE, Plaintiff demands judgment against Defendant in the sum of $[AMOUNT], plus filing fees, and costs of this action.

Dated: [DATE]

________________________
[PLAINTIFF NAME], Plaintiff

VERIFICATION

I, [PLAINTIFF NAME], being duly sworn, state that I am the Plaintiff in the above-entitled action, that I have read the foregoing Complaint and know the contents thereof, and that the same is true of my own knowledge, except as to matters therein stated to be alleged upon information and belief, and as to those matters, I believe them to be true.

________________________
[PLAINTIFF NAME], Plaintiff

Subscribed and sworn to before me this [DAY] day of [MONTH], [YEAR].

________________________
Notary Public
My Commission Expires: [DATE]

INSTRUCTIONS FOR FILING A SMALL CLAIMS CASE:

1. Complete this form and make two copies.
2. File the original with the Small Claims Court clerk and pay the filing fee.
3. Have one copy served on the Defendant either by certified mail with return receipt requested or by personal service.
4. Keep one copy for your records.
5. Bring all evidence (contracts, receipts, photographs, etc.) to your court date.
6. Be prepared to explain your case clearly and concisely to the judge.`,
  },
  {
    id: 'will-simple',
    title: 'Simple Last Will and Testament',
    category: 'Estate Planning',
    description: 'A basic will template for straightforward estate planning needs.',
    complexity: 'Medium',
    content: `LAST WILL AND TESTAMENT

OF

[FULL LEGAL NAME]

I, [FULL LEGAL NAME], a resident of [CITY], [COUNTY] County, [STATE], being of sound mind and memory, do hereby make, publish, and declare this to be my Last Will and Testament, hereby revoking all wills and codicils heretofore made by me.

ARTICLE I: DECLARATIONS

I am married to [SPOUSE'S NAME], and all references in this Will to my "spouse" are to [HIM/HER]. I have [NUMBER] children, namely: [NAMES AND BIRTH DATES OF ALL CHILDREN].

ARTICLE II: PAYMENT OF DEBTS AND EXPENSES

I direct that all my just debts, funeral expenses, and the expenses of my last illness be paid as soon after my death as practicable.

ARTICLE III: DISPOSITION OF PROPERTY

A. Specific Bequests:
   I give and bequeath the following specific items of property to the following persons:
   [LIST SPECIFIC BEQUESTS - ITEM AND RECIPIENT]

B. Residuary Estate:
   I give, devise, and bequeath all the rest, residue, and remainder of my estate, of whatever kind and wherever situated, to my [SPOUSE/CHILDREN/OTHER BENEFICIARIES] in the following manner:
   [DESCRIBE HOW THE REMAINDER OF YOUR ESTATE SHOULD BE DISTRIBUTED]

ARTICLE IV: APPOINTMENT OF EXECUTOR

I appoint [EXECUTOR NAME] as Executor of this my Last Will and Testament. If [EXECUTOR NAME] is unable or unwilling to serve, then I appoint [ALTERNATE EXECUTOR NAME] to serve as alternate Executor.

ARTICLE V: GUARDIAN FOR MINOR CHILDREN

In the event my spouse does not survive me, I appoint [GUARDIAN NAME] as Guardian of the person and property of my minor children. If [GUARDIAN NAME] is unable or unwilling to serve, then I appoint [ALTERNATE GUARDIAN NAME] to serve as alternate Guardian.

ARTICLE VI: POWERS OF EXECUTOR

I grant to my Executor all powers necessary to administer my estate as efficiently as possible, including, without limitation, the power to sell, lease, mortgage, or otherwise encumber any real or personal property of my estate, without court order and without appraisal.

IN WITNESS WHEREOF, I, [FULL LEGAL NAME], the Testator, sign my name to this instrument this [DAY] day of [MONTH], [YEAR], and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my Last Will and Testament and that I sign it willingly, that I execute it as my free and voluntary act for the purposes expressed therein, and that I am eighteen years of age or older, of sound mind, and under no constraint or undue influence.

________________________
[FULL LEGAL NAME], Testator

ATTESTATION CLAUSE

The foregoing instrument was signed, published, and declared by [FULL LEGAL NAME], the Testator, as [HIS/HER] Last Will and Testament, in the presence of us, who, at [HIS/HER] request and in [HIS/HER] presence, and in the presence of each other, have subscribed our names as witnesses thereto, believing said [FULL LEGAL NAME] to be of sound mind and memory.

________________________
Witness Signature
________________________
Printed Name
________________________
Address

________________________
Witness Signature
________________________
Printed Name
________________________
Address

STATE OF [STATE] )
                 ) ss.
COUNTY OF [COUNTY] )

We, [FULL LEGAL NAME], [WITNESS 1], and [WITNESS 2], the Testator and the witnesses, respectively, whose names are signed to the attached or foregoing instrument, being first duly sworn, do hereby declare to the undersigned authority that the Testator signed and executed the instrument as the Testator's Last Will and Testament and that [HE/SHE] executed it as [HIS/HER] free and voluntary act for the purposes therein expressed; and that each of the witnesses, in the presence and hearing of the Testator, signed the Will as witness and that to the best of their knowledge the Testator was at that time eighteen years of age or older, of sound mind, and under no constraint or undue influence.

________________________
[FULL LEGAL NAME], Testator

________________________
[WITNESS 1], Witness

________________________
[WITNESS 2], Witness

Subscribed, sworn to, and acknowledged before me by [FULL LEGAL NAME], the Testator, and subscribed and sworn to before me by [WITNESS 1] and [WITNESS 2], witnesses, this [DAY] day of [MONTH], [YEAR].

________________________
Notary Public
My Commission Expires: [DATE]`,
  },
  {
    id: 'employment-contract',
    title: 'Basic Employment Contract',
    category: 'Employment',
    description: 'A standard employment agreement outlining terms of employment and responsibilities.',
    complexity: 'Medium',
    content: `EMPLOYMENT AGREEMENT

THIS EMPLOYMENT AGREEMENT (the "Agreement") is made and entered into as of [DATE] (the "Effective Date"), by and between [EMPLOYER NAME], with its principal place of business at [EMPLOYER ADDRESS] (the "Employer"), and [EMPLOYEE NAME], residing at [EMPLOYEE ADDRESS] (the "Employee").

WHEREAS, the Employer desires to employ the Employee on the terms and conditions set forth herein; and

WHEREAS, the Employee desires to be employed by the Employer on such terms and conditions.

NOW, THEREFORE, in consideration of the mutual covenants, promises, and obligations set forth herein, the parties agree as follows:

1. POSITION AND DUTIES
   1.1 Position. The Employer employs the Employee as [JOB TITLE], and the Employee accepts such employment.
   1.2 Duties. The Employee shall perform all duties and responsibilities as are normally related to such position and as may be assigned from time to time by the Employer.

2. TERM OF EMPLOYMENT
   2.1 Initial Term. The term of the Employee's employment under this Agreement shall begin on the Effective Date and continue for a period of [TERM LENGTH] (the "Initial Term").
   2.2 Renewal. Upon the expiration of the Initial Term, this Agreement shall automatically renew for additional [RENEWAL TERM LENGTH] periods (each, a "Renewal Term"), unless either party provides written notice of non-renewal at least [NOTICE PERIOD] days prior to the expiration of the Initial Term or any Renewal Term.

3. COMPENSATION
   3.1 Base Salary. The Employer shall pay the Employee a base salary of $[SALARY AMOUNT] per [PAY PERIOD], subject to applicable withholdings.
   3.2 Benefits. The Employee shall be entitled to participate in all benefit plans, programs, and policies maintained by the Employer for its employees in accordance with their terms.
   3.3 Paid Time Off. The Employee shall be entitled to [NUMBER] days of paid time off per year.

4. TERMINATION
   4.1 Termination Without Cause. Either party may terminate this Agreement without cause upon [NOTICE PERIOD] days' written notice to the other party.
   4.2 Termination for Cause. The Employer may terminate this Agreement immediately for cause, which shall include, but not be limited to: (i) the Employee's material breach of this Agreement; (ii) the Employee's dishonesty, fraud, or misconduct; (iii) the Employee's conviction of a crime; or (iv) the Employee's failure to satisfactorily perform the duties of the position.

5. CONFIDENTIALITY
   The Employee acknowledges that during the course of employment, the Employee will have access to and become acquainted with confidential information belonging to the Employer. The Employee agrees not to disclose any such information to any person outside the Employer, either during or after employment, without the Employer's prior written consent.

6. NON-COMPETE
   During employment and for a period of [TIME PERIOD] following the termination of employment, the Employee shall not, directly or indirectly, engage in any business that competes with the Employer within [GEOGRAPHIC AREA].

7. GOVERNING LAW
   This Agreement shall be governed by and construed in accordance with the laws of the State of [STATE].

8. ENTIRE AGREEMENT
   This Agreement contains the entire understanding between the parties and supersedes all prior agreements and understandings, whether written or oral, relating to the subject matter hereof.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first above written.

EMPLOYER:
[EMPLOYER NAME]

By: ________________________
    [AUTHORIZED SIGNATORY NAME]
    [TITLE]

EMPLOYEE:

________________________
[EMPLOYEE NAME]`,
  }
];

const LegalTemplates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewingTemplate, setViewingTemplate] = useState<Template | null>(null);
  const [isTemplateViewerOpen, setIsTemplateViewerOpen] = useState(false);
  
  const categories = Array.from(new Set(templates.map(template => template.category)));

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? template.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  const handleViewTemplate = (template: Template) => {
    setViewingTemplate(template);
    setIsTemplateViewerOpen(true);
  };

  const handleDownloadTemplate = (template: Template) => {
    const element = document.createElement('a');
    const file = new Blob([template.content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${template.title.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: 'Template Downloaded',
      description: `${template.title} has been downloaded successfully.`,
    });
  };

  return (
    <section id="templates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-legalease-50 text-legalease-700 mb-4">
              Legal Documents
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional Legal Document Templates
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Access and customize professional legal templates without legal expertise. Handle common legal tasks with confidence.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-legalease-200 focus:border-legalease-400 transition-all"
                />
              </div>
              
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-legalease-200 focus:border-legalease-400 transition-all bg-white"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <div 
                key={template.id}
                className="bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden transform transition-all hover:shadow-hover hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-legalease-50 text-legalease-600 p-2 rounded-lg">
                        <FileText className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-medium text-gray-500">{template.category}</span>
                    </div>
                    <span className={cn(
                      "text-xs font-medium px-2 py-1 rounded-full",
                      template.complexity === 'Simple' ? "bg-green-50 text-green-600" :
                      template.complexity === 'Medium' ? "bg-yellow-50 text-yellow-600" :
                      "bg-orange-50 text-orange-600"
                    )}>
                      {template.complexity}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{template.description}</p>
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => handleViewTemplate(template)}
                      className="text-sm font-medium text-legalease-600 hover:text-legalease-700 transition-colors flex items-center"
                    >
                      <Eye className="h-4 w-4 mr-1" /> View Template
                    </button>
                    <button 
                      onClick={() => handleDownloadTemplate(template)}
                      className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors flex items-center"
                    >
                      <Download className="h-4 w-4 mr-1" /> Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="bg-white rounded-xl p-8 text-center shadow-subtle border border-gray-100">
              <p className="text-gray-500 mb-4">No templates match your search criteria.</p>
              <button 
                className="text-legalease-600 hover:text-legalease-700 font-medium"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}
              >
                Clear filters
              </button>
            </div>
          )}

          <TemplateViewer 
            template={viewingTemplate}
            isOpen={isTemplateViewerOpen}
            onClose={() => {
              setIsTemplateViewerOpen(false);
              setViewingTemplate(null);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LegalTemplates;

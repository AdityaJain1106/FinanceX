
const faqList = [
  { question: "What is a budget?", answer: "A budget is a plan for managing your income and expenses over a period of time, usually monthly or yearly." },
  { question: "Why is budgeting important?", answer: "Budgeting helps you control spending, save money, and achieve financial goals." },
  { question: "What is an emergency fund?", answer: "An emergency fund is savings set aside for unexpected expenses like medical bills or job loss." },
  { question: "How much should I have in my emergency fund?", answer: "Ideally, 3 to 6 months of living expenses should be in your emergency fund." },
  { question: "What is the difference between a credit card and a debit card?", answer: "A credit card lets you borrow money up to a limit; a debit card uses money directly from your bank account." },
  { question: "What is a credit score?", answer: "A credit score is a number that reflects your creditworthiness based on your credit history." },
  { question: "How can I improve my credit score?", answer: "Pay bills on time, reduce debt, avoid new credit inquiries, and maintain a healthy credit mix." },
  { question: "What is compound interest?", answer: "Compound interest is interest earned on both the original amount and any interest already earned." },
  { question: "What is the best way to start saving money?", answer: "Start small, automate savings, cut unnecessary expenses, and set specific goals." },
  { question: "What is an asset?", answer: "An asset is something of value that you own, such as cash, property, or stocks." },
  { question: "What is a liability?", answer: "A liability is something you owe—like loans, credit card balances, or bills." },
  { question: "What is net worth?", answer: "Net worth = Total Assets - Total Liabilities. It shows your overall financial health." },
  { question: "What is passive income?", answer: "Money earned regularly with little or no effort, like rent, dividends, or royalties." },
  { question: "What is diversification in investing?", answer: "Spreading your investments across different assets to reduce risk." },
  { question: "What is an ETF?", answer: "An Exchange Traded Fund is a basket of securities you can buy or sell like a stock." },
  { question: "What is a mutual fund?", answer: "A mutual fund pools money from many investors to buy a mix of stocks, bonds, or other assets." },
  { question: "What is inflation?", answer: "Inflation is the rise in prices over time, reducing the purchasing power of money." },
  { question: "How does inflation affect savings?", answer: "Inflation erodes the value of money, so long-term savings may lose purchasing power." },
  { question: "What is a fixed deposit (FD)?", answer: "A fixed deposit is a savings instrument with a fixed tenure and interest rate, offered by banks." },
  { question: "What is a recurring deposit (RD)?", answer: "An RD lets you deposit a fixed amount regularly, earning interest over time." },
  { question: "What is SIP (Systematic Investment Plan)?", answer: "A method to invest fixed amounts regularly in a mutual fund." },
  { question: "What is PPF (Public Provident Fund)?", answer: "A government-backed, tax-free long-term savings scheme in India." },
  { question: "What is NPS (National Pension System)?", answer: "A retirement savings scheme by the Indian government with tax benefits." },
  { question: "What is the stock market?", answer: "A marketplace for buying and selling shares of public companies." },
  { question: "What is a share or stock?", answer: "A unit of ownership in a company." },
  { question: "What is an IPO?", answer: "Initial Public Offering — when a company offers shares to the public for the first time." },
  { question: "What is capital gain?", answer: "Profit earned from selling an investment at a higher price than you paid." },
  { question: "What is a demat account?", answer: "An account to hold shares in electronic format." },
  { question: "What is a trading account?", answer: "An account used to place buy/sell orders in the stock market." },
  { question: "What is a brokerage fee?", answer: "A fee charged by brokers to facilitate trades on your behalf." },
  { question: "What is insurance?", answer: "A financial product that provides protection against risks or losses." },
  { question: "What is life insurance?", answer: "A policy that pays a sum to your family if you die." },
  { question: "What is term insurance?", answer: "A life insurance policy that covers you for a specific period." },
  { question: "What is health insurance?", answer: "Covers medical expenses for illness or injury." },
  { question: "What is a premium?", answer: "The amount you pay periodically to keep an insurance policy active." },
  { question: "What is a claim in insurance?", answer: "A request to your insurer for payment as per the policy." },
  { question: "What is TDS (Tax Deducted at Source)?", answer: "Tax collected by the payer before making a payment." },
  { question: "What is Form 26AS?", answer: "A tax credit statement showing all TDS deducted and deposited on your behalf." },
  { question: "What is Form 16?", answer: "A certificate issued by employers showing TDS on salary." },
  { question: "What is ITR (Income Tax Return)?", answer: "A form to report your income and taxes to the government." },
  { question: "What is GST?", answer: "Goods and Services Tax — a unified tax on goods and services in India." },
  { question: "What is a PAN card?", answer: "Permanent Account Number — a unique ID for financial transactions in India." },
  { question: "What is CIBIL score?", answer: "A credit score in India that shows your loan repayment history." },
  { question: "What is a personal loan?", answer: "An unsecured loan taken for personal needs like medical or travel expenses." },
  { question: "What is a home loan?", answer: "A loan taken to buy a house or apartment." },
  { question: "What is a car loan?", answer: "A loan used to finance the purchase of a vehicle." },
  { question: "What is loan EMI?", answer: "Equated Monthly Installment — your fixed monthly loan payment." },
  { question: "What is loan tenure?", answer: "The duration over which the loan is to be repaid." },
  { question: "What is interest rate?", answer: "The percentage of the loan amount charged for borrowing money." },
  { question: "What is a co-applicant in a loan?", answer: "A second person equally responsible for loan repayment." },
  { question: "What is foreclosure of a loan?", answer: "Paying off a loan early, before the tenure ends." },
  { question: "What is prepayment?", answer: "Partially paying off your loan before the due date." },
  { question: "What is debt consolidation?", answer: "Combining multiple debts into one loan for easier management." },
  { question: "What is financial planning?", answer: "Creating a strategy to manage your money to meet life goals." },
  { question: "What are financial goals?", answer: "Targets like buying a house, saving for retirement, or vacation planning." },
  { question: "What is retirement planning?", answer: "Preparing financially for the time when you stop working." },
  { question: "What is estate planning?", answer: "Planning how your assets will be distributed after death." },
  { question: "What is a will?", answer: "A legal document stating how your assets should be distributed after death." },
  { question: "What is a nominee?", answer: "A person who will receive your assets if you pass away." },
  { question: "What is financial literacy?", answer: "The ability to understand and effectively manage financial matters." },
  { question: "What is an audit?", answer: "A formal review of financial records and practices." },
  { question: "What is an asset allocation?", answer: "Distributing your investments among different asset classes like stocks, bonds, etc." },
  { question: "What is a risk appetite?", answer: "Your willingness to take financial risks." },
  { question: "What is a portfolio?", answer: "A collection of investments held by an individual or institution." },
  { question: "What is liquidity?", answer: "How easily an asset can be converted into cash." },
  { question: "What is diversification?", answer: "Spreading investments across different assets to reduce risk." },
  { question: "What is leverage?", answer: "Using borrowed money to increase the potential return of an investment." },
  { question: "What is arbitrage?", answer: "Taking advantage of price differences in different markets." },
  { question: "What is a bull market?", answer: "A period of rising stock prices and optimism." },
  { question: "What is a bear market?", answer: "A period of falling stock prices and pessimism." },
  { question: "What is a financial advisor?", answer: "A professional who helps manage your finances and plan for goals." },
  { question: "What is behavioral finance?", answer: "The study of how emotions and biases affect financial decisions." },
  { question: "What is zero-based budgeting?", answer: "A method where every rupee is assigned a role and budget resets to zero each cycle." },
  { question: "What is an overdraft?", answer: "A facility allowing you to withdraw more than your account balance." },
  { question: "What is a cheque bounce?", answer: "When a cheque is returned due to insufficient funds or errors." },
  { question: "What is net banking?", answer: "Managing your bank account online through your bank’s website or app." },
  { question: "What is UPI?", answer: "Unified Payments Interface — a real-time payment system in India." },
  { question: "What is a NEFT/RTGS/IMPS?", answer: "Different electronic methods for transferring money between banks in India." },
  { question: "What is a fixed income investment?", answer: "Investments like bonds that pay a fixed interest over time." },
  { question: "What is the Rule of 72?", answer: "A quick way to estimate how long an investment will double: 72 ÷ interest rate." },
  { question: "What is a personal budget?", answer: "A plan that outlines your income and expenses to manage your money effectively." },
  { question: "How can I create an effective budget?", answer: "Track your income and expenses, categorize them, and set spending limits for each category." },
  { question: "What is an emergency fund?", answer: "Savings set aside to cover unexpected expenses or financial emergencies." },
  { question: "How much should I save in my emergency fund?", answer: "Aim for 3-6 months' worth of living expenses." },
  { question: "What is the 50/30/20 budgeting rule?", answer: "Allocate 50% of income to needs, 30% to wants, and 20% to savings or debt repayment." },
  { question: "How can I reduce my monthly expenses?", answer: "Identify non-essential spending, negotiate bills, and look for cost-effective alternatives." },
  { question: "What is the difference between needs and wants?", answer: "Needs are essential for survival; wants are non-essential items or services." },
  { question: "How can I avoid impulse buying?", answer: "Create a shopping list, set a waiting period before purchases, and avoid shopping when emotional." },
  { question: "What are sinking funds?", answer: "Savings set aside for specific, anticipated expenses like vacations or car repairs." },
  { question: "How often should I review my budget?", answer: "Regularly, such as monthly, to adjust for changes in income or expenses." },
  { question: "What is a savings account?", answer: "A bank account that earns interest on deposited funds." },
  { question: "What is a checking account?", answer: "A bank account used for daily transactions like deposits and withdrawals." },
  { question: "What is compound interest?", answer: "Interest calculated on the initial principal and also on the accumulated interest." },
  { question: "How can I choose the right bank?", answer: "Consider factors like fees, interest rates, accessibility, and customer service." },
  { question: "What is FDIC insurance?", answer: "Protection for depositors, insuring up to $250,000 per depositor, per insured bank." },
  { question: "What are online banks?", answer: "Banks that operate primarily online, often offering higher interest rates and lower fees." },
  { question: "What is a certificate of deposit (CD)?", answer: "A savings account with a fixed interest rate and fixed maturity date." },
  { question: "What is a money market account?", answer: "A savings account that typically offers higher interest rates with limited check-writing ability." },
  { question: "How can I avoid bank fees?", answer: "Maintain minimum balances, use in-network ATMs, and opt for accounts with no monthly fees." },
  { question: "What is a debit card?", answer: "A card linked to your checking account, allowing you to make purchases directly from your account balance." },
  { question: "What is a credit score?", answer: "A numerical representation of your creditworthiness, ranging from 300 to 850." },
  { question: "How can I improve my credit score?", answer: "Pay bills on time, reduce debt, and avoid opening unnecessary credit accounts." },
  { question: "What is a credit report?", answer: "A detailed record of your credit history, including loans, credit cards, and payment history." },
  { question: "How can I check my credit report?", answer: "Request a free report annually from each of the three major credit bureaus." },
  { question: "What is APR (Annual Percentage Rate)?", answer: "The annual rate charged for borrowing, including interest and fees." },
  { question: "What is a secured loan?", answer: "A loan backed by collateral, such as a car or house." },
  { question: "What is an unsecured loan?", answer: "A loan not backed by collateral, typically with higher interest rates." },
  { question: "What is a payday loan?", answer: "A short-term, high-interest loan intended to cover immediate expenses until the next payday." },
  { question: "What is loan consolidation?", answer: "Combining multiple loans into a single loan with one monthly payment." },
  { question: "What is a co-signer?", answer: "Someone who agrees to repay a loan if the primary borrower defaults." },
  { question: "What is investing?", answer: "Allocating money with the expectation of generating a profit or income." },
  { question: "What are stocks?", answer: "Shares representing ownership in a company." },
  { question: "What are bonds?", answer: "Debt securities issued by entities to raise capital, paying interest over time." },
  { question: "What is a mutual fund?", answer: "An investment vehicle pooling money from multiple investors to purchase a diversified portfolio." },
  { question: "What is an ETF (Exchange-Traded Fund)?", answer: "A fund that trades on stock exchanges, holding assets like stocks or bonds." },
  { question: "What is diversification?", answer: "Spreading investments across various assets to reduce risk." },
  { question: "What is risk tolerance?", answer: "An investor's ability and willingness to endure market volatility." },
  { question: "What is a portfolio?", answer: "A collection of financial investments like stocks, bonds, and cash equivalents." },
  { question: "What is dollar-cost averaging?", answer: "Investing a fixed amount regularly, regardless of market conditions." },
  { question: "What is a dividend?", answer: "A portion of a company's earnings distributed to shareholders." },
  { question: "What is income tax?", answer: "A tax levied on individual or corporate earnings." },
  { question: "What is a tax deduction?", answer: "An expense subtracted from gross income to reduce taxable income." },
  { question: "What is a tax credit?", answer: "A direct reduction of the tax owed, dollar for dollar." },
  { question: "What is a W-2 form?", answer: "A form employers provide to employees detailing annual wages and taxes withheld." },
  { question: "What is a 1099 form?", answer: "A form reporting various types of income other than wages, salaries, and tips." },
  { question: "What is tax withholding?", answer: "The portion of an employee's wages withheld by the employer for taxes." },
  { question: "What is a tax refund?", answer: "Money returned to a taxpayer when tax payments exceed the actual tax owed." },
  { question: "What is the standard deduction?", answer: "A fixed dollar amount that reduces taxable income, varying by filing status." },
  { question: "What is itemized deduction?", answer: "Specific expenses allowed by the IRS that can reduce taxable income." },
  { question: "What is capital gains tax?", answer: "A tax on the profit from the sale of an asset." },
  { question: "What is a mortgage?", answer: "A loan used to purchase a home, secured by the property itself." },
  { question: "What is a fixed-rate mortgage?", answer: "A mortgage with a constant interest rate and monthly payments over the life of the loan." },
  { question: "What is an adjustable-rate mortgage (ARM)?", answer: "A mortgage with an interest rate that may change periodically." },
  { question: "What is a down payment?", answer: "An initial payment made when purchasing a home, typically a percentage of the purchase price." },
  { question: "What are closing costs?", answer: "Fees and expenses paid during the finalization of a real estate transaction." },
  { question: "What is home equity?", answer: "The difference between a home's market value and the outstanding mortgage balance." },
  { question: "What is refinancing?", answer: "Replacing an existing mortgage with a new one, often to secure better terms." },
  { question: "What is a home inspection?", answer: "An assessment of a property's condition, typically conducted before purchase." },
  { question: "What is property tax?", answer: "A tax assessed on real estate by local governments." },
  { question: "What is a homeowner's association (HOA)?", answer: "An organization managing a residential community, enforcing rules, and maintaining common areas." },
  { question: "What is a student loan?", answer: "A loan designed to help students pay for post-secondary education expenses." },
  { question: "What is federal student aid?", answer: "Financial assistance from the U.S. government to help students pay for education." },
  { question: "What is FAFSA?", answer: "Free Application for Federal Student Aid; a form used to apply for financial aid." },
  { question: "What is loan deferment?", answer: "A temporary postponement of loan payments under certain conditions." },
  { question: "What is loan forbearance?", answer: "A temporary reduction or suspension of loan payments due to financial hardship." },
  { question: "What is loan consolidation?", answer: "Combining multiple student loans into one loan with a single payment." },
  { question: "What is loan forgiveness?", answer: "Cancellation of all or part of a student loan under specific conditions." },
  { question: "What is interest capitalization?", answer: "Unpaid interest added to the principal balance of a loan." },
  { question: "What is a grace period?", answer: "A period after graduation during which loan payments are not required." },
  { question: "What is a subsidized loan?", answer: "A loan where the government pays the interest while the student is in school." },
  { question: "What is insurance?", answer: "A contract providing financial protection against specific risks." },
  { question: "What is a premium?", answer: "The amount paid for an insurance policy." },
  { question: "What is a deductible?", answer: "The amount paid out of pocket before insurance coverage begins." },
  { question: "What is liability insurance?", answer: "Coverage that protects against claims resulting from injuries or damage to others." },
  { question: "What is term life insurance?", answer: "Life insurance providing coverage for a specific period." },
  { question: "What is whole life insurance?", answer: "Life insurance offering coverage for the insured's entire life with a savings component." },
  { question: "What is health insurance?", answer: "Coverage that pays for medical and surgical expenses." },
  { question: "What is an insurance beneficiary?", answer: "The person designated to receive the benefits from an insurance policy." },
  { question: "What is renters insurance?", answer: "Insurance covering personal property within a rented residence." },
  { question: "What is an insurance claim?", answer: "A request made to an insurance company for payment based on policy terms." },
  { question: "What is retirement planning?", answer: "The process of determining retirement income goals and the actions to achieve them." },
  { question: "What is a 401(k) plan?", answer: "An employer-sponsored retirement savings plan allowing employees to save." },
  { question: "How is a personal budget created?", answer: "By tracking income and expenses, categorizing them, and setting spending limits to manage finances effectively." },
  { question: "How does budgeting help in financial planning?", answer: "It provides a roadmap for spending, saving, and achieving financial goals by allocating resources appropriately." },
  { question: "How is discretionary income calculated?", answer: "By subtracting taxes and necessary living expenses from gross income." },
  { question: "How does the 50/30/20 rule work in budgeting?", answer: "It allocates 50% of income to needs, 30% to wants, and 20% to savings or debt repayment." },
  { question: "How is an emergency fund established?", answer: "By regularly setting aside a portion of income until reaching 3–6 months' worth of living expenses." },
  { question: "How does inflation impact personal savings?", answer: "It erodes purchasing power, meaning saved money buys less over time if not invested wisely." },
  { question: "How is net worth determined?", answer: "By subtracting total liabilities from total assets." },
  { question: "How does compound interest affect savings?", answer: "It allows interest to earn additional interest over time, accelerating growth." },
  { question: "How is a sinking fund utilized?", answer: "By saving a specific amount regularly for a known future expense, like a vacation or car repair." },
  { question: "How does tracking expenses improve financial health?", answer: "It increases awareness of spending habits, helping to identify areas to cut back and save." },
  { question: "How is interest on savings accounts calculated?", answer: "Typically using the simple or compound interest formula based on the account's terms." },
  { question: "How does a high-yield savings account differ from a regular one?", answer: "It offers a higher interest rate, allowing savings to grow faster." },
  { question: "How is FDIC insurance beneficial?", answer: "It protects depositors by insuring up to $250,000 per depositor, per insured bank." },
  { question: "How does online banking enhance financial management?", answer: "By providing easy access to accounts, facilitating transfers, and offering budgeting tools." },
  { question: "How is a certificate of deposit (CD) structured?", answer: "It locks funds for a fixed term at a fixed interest rate, with penalties for early withdrawal." },
  { question: "How does a money market account function?", answer: "It combines features of savings and checking accounts, often with higher interest rates and limited transactions." },
  { question: "How is a bank's annual percentage yield (APY) determined?", answer: "By considering the interest rate and the frequency of compounding over a year." },
  { question: "How does overdraft protection work?", answer: "It prevents declined transactions by covering overdrafts, often with associated fees or linked accounts." },
  { question: "How is mobile banking secure?", answer: "Through encryption, two-factor authentication, and regular security updates." },
  { question: "How does setting up automatic transfers aid in saving?", answer: "It ensures consistent contributions to savings accounts, promoting disciplined saving habits." },
  { question: "How is a credit score calculated?", answer: "Based on payment history, credit utilization, length of credit history, new credit, and credit mix." },
  { question: "How does paying off debt affect credit score?", answer: "It can improve the score by reducing credit utilization and demonstrating responsible repayment." },
  { question: "How is a loan's interest rate determined?", answer: "By factors like creditworthiness, loan type, term length, and prevailing market rates." },
  { question: "How does a secured loan differ from an unsecured loan?", answer: "A secured loan is backed by collateral, reducing lender risk, while an unsecured loan isn't." },
  { question: "How is loan amortization structured?", answer: "Through scheduled payments that cover both interest and principal over the loan term." },
  { question: "How does refinancing a loan work?", answer: "By replacing an existing loan with a new one, often to secure better terms or rates." },
  { question: "How is a credit limit established?", answer: "Based on credit history, income, and lender policies." },
  { question: "How does a balance transfer credit card function?", answer: "It allows transferring existing debt to a new card, often with a promotional interest rate." },
  { question: "How is a co-signer's credit affected by a loan?", answer: "They're equally responsible; missed payments can negatively impact their credit score." },
  { question: "How does defaulting on a loan impact future borrowing?", answer: "It damages credit history, making it harder to obtain loans or favorable terms in the future." },
  { question: "How is investment risk assessed?", answer: "By evaluating factors like volatility, market conditions, and individual risk tolerance." },
  { question: "How does diversification reduce investment risk?", answer: "By spreading investments across various assets, minimizing the impact of a single asset's poor performance." },
  { question: "How is a stock's price determined?", answer: "Through supply and demand dynamics in the market, influenced by company performance and investor sentiment." },
  { question: "How does a mutual fund operate?", answer: "It pools money from investors to purchase a diversified portfolio of stocks, bonds, or other securities." },
  { question: "How is an ETF different from a mutual fund?", answer: "ETFs trade like stocks on exchanges and often have lower fees, while mutual funds are priced once daily." },
  { question: "How does dollar-cost averaging work?", answer: "By investing a fixed amount regularly, reducing the impact of market volatility over time." },
  { question: "How is return on investment (ROI) calculated?", answer: "By dividing net profit by the initial investment cost, then multiplying by 100 to get a percentage." },
  { question: "How does inflation affect investment returns?", answer: "It decreases the real value of returns, making it essential to achieve returns that outpace inflation." },
  { question: "How is a bond's yield determined?", answer: "By dividing the annual interest payment by the bond's current market price." },
  { question: "How does compounding impact investment growth?", answer: "It accelerates growth as earnings generate additional earnings over time." },
  { question: "How is taxable income calculated?", answer: "By subtracting deductions and exemptions from gross income." },
  { question: "How does tax withholding work?", answer: "Employers deduct estimated taxes from paychecks to cover income tax liabilities." },
  { question: "How is a tax refund generated?", answer: "When withheld taxes exceed actual tax liability, the excess is refunded." },
  { question: "How does filing status affect tax rates?", answer: "It determines tax brackets and standard deductions, impacting overall tax liability." },
  { question: "How is capital gains tax applied?", answer: "On profits from the sale of assets; rates vary based on holding period and income level." },
  { question: "How does tax-deferred growth benefit retirement accounts?", answer: "It allows investments to grow without immediate taxation, enhancing compound growth." },
  { question: "How is self-employment tax calculated?", answer: "By applying the self-employment tax rate to net earnings from self-employment." },
  { question: "How does a tax credit differ from a deduction?", answer: "A credit reduces tax liability dollar-for-dollar, while a deduction lowers taxable income." },
  { question: "How is estimated tax calculated for freelancers?", answer: "By projecting annual income and dividing the total tax liability into quarterly payments." },
  { question: "How does charitable giving impact taxes?", answer: "Donations to qualified organizations can be deducted, reducing taxable income." },
  { question: "How is mortgage eligibility determined?", answer: "Based on credit score, income, debt-to-income ratio, and employment history." },
  { question: "How does a fixed-rate mortgage work?", answer: "It maintains the same interest rate and monthly payment throughout the loan term." },
  { question: "How is an adjustable-rate mortgage structured?", answer: "It starts with a fixed rate for a period, then adjusts periodically based on market rates." },
  { question: "How does a down payment affect mortgage terms?", answer: "Larger down payments can lead to better interest rates and lower monthly payments." },
  { question: "How is home equity calculated?", answer: "By subtracting the outstanding mortgage balance from the home's current market value." },
  { question: "How is a dividend yield calculated?", answer: "By dividing annual dividends by the stock's current price." },
  { question: "How does insider trading affect market integrity?", answer: "It undermines fair market practices and investor confidence." },
  { question: "How is a stock classified as growth or value?", answer: "Based on valuation metrics, earnings trends, and investor expectations." },
  { question: "How does short selling work?", answer: "By borrowing shares to sell them at current prices, hoping to repurchase cheaper later." },
  { question: "How is portfolio rebalancing done?", answer: "By adjusting asset allocations back to target percentages after market fluctuations." },
  { question: "How does market capitalization affect stock classification?", answer: "It categorizes companies as small-cap, mid-cap, or large-cap based on value." },
  { question: "How is a company’s earnings per share (EPS) calculated?", answer: "By dividing net income by the number of outstanding shares." },
  { question: "How does leverage affect investment returns?", answer: "It can amplify gains or losses by using borrowed funds." },
  { question: "How is beta used in assessing risk?", answer: "It measures a stock’s volatility relative to the overall market." },
  { question: "How does a stock split affect share value?", answer: "It increases share count while reducing per-share price, keeping total value constant." },
  { question: "How is gross income different from net income?", answer: "Gross is before deductions; net is after taxes and other deductions." },
  { question: "How does overtime pay work?", answer: "Typically 1.5 times the regular hourly rate for hours worked over 40 in a week." },
  { question: "How is income tax withheld from paychecks?", answer: "Based on IRS tables, income level, and W-4 information." },
  { question: "How does freelancing affect tax filing?", answer: "Freelancers must report all income and pay self-employment tax." },
  { question: "How is commission-based income taxed?", answer: "As regular income, often subject to higher withholding due to variability." },
  { question: "How does job loss affect retirement planning?", answer: "It may require reducing contributions or withdrawing emergency funds." },
  { question: "How is unemployment compensation taxed?", answer: "It is usually considered taxable income at the federal level." },
  { question: "How does salary negotiation impact long-term wealth?", answer: "Higher starting salaries compound through raises and retirement savings over time." },
  { question: "How is part-time income reported for taxes?", answer: "As ordinary income, regardless of hours worked." },
  { question: "How does a raise impact your tax bracket?", answer: "Only income above the previous bracket is taxed at the higher rate." },
  { question: "How is retirement savings projected?", answer: "By estimating future expenses, adjusting for inflation, and calculating needed savings." },
  { question: "How does a financial advisor assist with planning?", answer: "By creating customized strategies for budgeting, investing, and retirement." },
  { question: "How is a financial goal prioritized?", answer: "Based on time frame, necessity, and impact on overall financial well-being." },
  { question: "How does risk tolerance affect investment choice?", answer: "It guides whether to choose conservative, balanced, or aggressive portfolios." },
  { question: "How is a financial plan reviewed over time?", answer: "By regularly checking goals, income, and market changes to make adjustments." },
  { question: "How does saving early impact retirement outcomes?", answer: "It allows more time for compound growth, reducing future contributions needed." },
  { question: "How is financial independence measured?", answer: "When passive income covers all expenses without needing active work." },
  { question: "How does the FIRE movement approach retirement?", answer: "Through extreme saving and investing to retire early and live frugally." },
  { question: "How is a legacy plan structured?", answer: "By organizing wills, trusts, and beneficiaries to transfer wealth effectively." },
  { question: "How does setting SMART financial goals improve results?", answer: "They provide clear, measurable, and achievable targets to stay on track." },
  { question: "How is a debt-to-income ratio calculated?", answer: "By dividing total monthly debt payments by gross monthly income." },
  { question: "How does snowball debt repayment work?", answer: "By paying off smallest debts first to build momentum and motivation." },
  { question: "How is interest on credit card debt calculated?", answer: "Based on the average daily balance and APR." },
  { question: "How does a debt consolidation loan help?", answer: "It combines multiple debts into one, often at a lower interest rate." },
  { question: "How is default handled by creditors?", answer: "Through collections, credit reporting, and potential legal action." },
  { question: "How does bankruptcy affect your financial future?", answer: "It severely impacts credit scores and access to loans for several years." },
  { question: "How is student loan interest subsidized?", answer: "For federal subsidized loans, the government pays interest while in school." },
  { question: "How does credit counseling assist with debt?", answer: "It offers budgeting help and negotiates lower interest rates or payment plans." },
  { question: "How is minimum payment calculated on credit cards?", answer: "As a small percentage of the total balance, plus interest and fees." },
  { question: "How does paying more than the minimum help?", answer: "It reduces principal faster and lowers total interest paid." },
  { question: "How is financial literacy taught effectively?", answer: "Through real-life scenarios, budgeting exercises, and clear terminology." },
  { question: "How does understanding APR prevent debt traps?", answer: "It clarifies the real cost of borrowing and helps compare offers." },
  { question: "How is financial knowledge linked to wealth-building?", answer: "Informed individuals make smarter spending, saving, and investment choices." },
  { question: "How does learning about taxes benefit individuals?", answer: "It allows for better planning, deductions, and filing accuracy." },
  { question: "How is compounding taught in simple terms?", answer: "As interest earning interest, leading to exponential growth over time." }
];

function handleUserQuestion() {
  const input = document.getElementById("user-input");
  const userQuestion = input.value.trim();
  if (!userQuestion) return;

  addMessage("user", userQuestion);
  input.value = "";
  clearSuggestions();

  const matchedFAQ = faqList.find(faq =>
    faq.question.toLowerCase() === userQuestion.toLowerCase()
  );

  if (matchedFAQ) {
    addMessage("bot", matchedFAQ.answer);
  } else {
    addMessage("bot", "Sorry, I don't have an answer for that yet.");
  }
}

function addMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.className = `chat-message ${sender}`;
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showSuggestions() {
  const input = document.getElementById("user-input");
  const query = input.value.toLowerCase();
  const suggestionBox = document.getElementById("suggestions");
  clearSuggestions();

  if (!query) return;

  const matches = faqList.filter(faq =>
    faq.question.toLowerCase().includes(query)
  );

  matches.slice(0, 5).forEach(faq => {
    const li = document.createElement("li");
    li.textContent = faq.question;
    li.onclick = () => {
      input.value = faq.question;
      clearSuggestions();
    };
    suggestionBox.appendChild(li);
  });
}

function clearSuggestions() {
  const suggestionBox = document.getElementById("suggestions");
  suggestionBox.innerHTML = "";
}

function handleEnter(event) {
  if (event.key === "Enter") {
    handleUserQuestion();
  }
}

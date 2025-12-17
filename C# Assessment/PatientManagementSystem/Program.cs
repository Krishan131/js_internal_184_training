using System;

// ---------------- DELEGATES ----------------
public delegate double BillingDelegate(double amount);
public delegate void BillGeneratedHandler(string message);

// ---------------- BASE CLASS ----------------
class Patient
{
    public string Name;
    public int Age;

    public Patient(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public virtual double GetBaseBill()
    {
        return 0;
    }
}

// ---------------- PATIENT TYPES ----------------
class GeneralPatient : Patient
{
    public GeneralPatient(string name, int age) : base(name, age) { }
    public override double GetBaseBill() { return 2000; }
}

class EmergencyPatient : Patient
{
    public EmergencyPatient(string name, int age) : base(name, age) { }
    public override double GetBaseBill() { return 5000; }
}

class ICUPatient : Patient
{
    public ICUPatient(string name, int age) : base(name, age) { }
    public override double GetBaseBill() { return 8000; }
}

class OPDPatient : Patient
{
    public OPDPatient(string name, int age) : base(name, age) { }
    public override double GetBaseBill() { return 1000; }
}

// ---------------- HOSPITAL (PUBLISHER) ----------------
class Hospital
{
    public event BillGeneratedHandler BillGenerated;

    public void GenerateBill(Patient patient, BillingDelegate billingLogic)
    {
        double baseBill = patient.GetBaseBill();
        double finalBill = billingLogic(baseBill);
        double extraCharges = finalBill - baseBill;

        Console.WriteLine("\n------ BILL DETAILS ------");
        Console.WriteLine("Patient Name   : " + patient.Name);
        Console.WriteLine("Patient Age    : " + patient.Age);
        Console.WriteLine("Base Bill      : Rs. " + baseBill);
        Console.WriteLine("Extra Charges  : Rs. " + extraCharges);
        Console.WriteLine("Final Amount   : Rs. " + finalBill);
        Console.WriteLine("--------------------------");

        if (BillGenerated != null)
            BillGenerated("Bill generated for patient " + patient.Name);
    }
}

// ---------------- SUBSCRIBERS ----------------
class AccountsDepartment
{
    public void Notify(string msg)
    {
        Console.WriteLine("Accounts Department Notification: " + msg);
    }
}

class PharmacyDepartment
{
    public void Notify(string msg)
    {
        Console.WriteLine("Pharmacy Department Notification: " + msg);
    }
}

// ---------------- MAIN PROGRAM ----------------
class Program
{
    // -------- BILLING METHODS --------
    static double NormalBilling(double amount)
    {
        double doctorFee = 500;
        double serviceCharge = 300;
        double tax = (amount + doctorFee + serviceCharge) * 0.05;

        return amount + doctorFee + serviceCharge + tax;
    }

    static double EmergencyBilling(double amount)
    {
        double emergencyCharge = 1500;
        double doctorFee = 800;
        double serviceCharge = 500;
        double tax = (amount + emergencyCharge + doctorFee + serviceCharge) * 0.05;

        return amount + emergencyCharge + doctorFee + serviceCharge + tax;
    }

    static double ICUBilling(double amount)
    {
        double icuCharge = 3000;
        double doctorFee = 1200;
        double serviceCharge = 800;
        double tax = (amount + icuCharge + doctorFee + serviceCharge) * 0.05;

        return amount + icuCharge + doctorFee + serviceCharge + tax;
    }

    static double OPDBilling(double amount)
    {
        double doctorFee = 300;
        double tax = (amount + doctorFee) * 0.05;

        return amount + doctorFee + tax;
    }

    static void Main()
    {
        Hospital hospital = new Hospital();

        AccountsDepartment accounts = new AccountsDepartment();
        PharmacyDepartment pharmacy = new PharmacyDepartment();

        hospital.BillGenerated += accounts.Notify;
        hospital.BillGenerated += pharmacy.Notify;

        while (true)
        {
            Console.WriteLine("\n===== HOSPITAL MANAGEMENT SYSTEM =====");
            Console.WriteLine("1. Admit Patient and Generate Bill");
            Console.WriteLine("2. Exit");
            Console.Write("Enter your choice: ");

            int menuChoice = int.Parse(Console.ReadLine());

            if (menuChoice == 2)
            {
                Console.WriteLine("Exiting system...");
                break;
            }

            Console.Write("Enter Patient Name: ");
            string name = Console.ReadLine();

            Console.Write("Enter Patient Age: ");
            int age = int.Parse(Console.ReadLine());

            Console.WriteLine("\nSelect Patient Type");
            Console.WriteLine("1. General Patient");
            Console.WriteLine("2. Emergency Patient");
            Console.WriteLine("3. ICU Patient");
            Console.WriteLine("4. OPD Patient");
            Console.Write("Enter choice: ");

            int typeChoice = int.Parse(Console.ReadLine());

            Patient patient = null;
            BillingDelegate billingMethod = null;

            switch (typeChoice)
            {
                case 1:
                    patient = new GeneralPatient(name, age);
                    billingMethod = NormalBilling;
                    break;

                case 2:
                    patient = new EmergencyPatient(name, age);
                    billingMethod = EmergencyBilling;
                    break;

                case 3:
                    patient = new ICUPatient(name, age);
                    billingMethod = ICUBilling;
                    break;

                case 4:
                    patient = new OPDPatient(name, age);
                    billingMethod = OPDBilling;
                    break;

                default:
                    Console.WriteLine("Invalid patient type selected");
                    continue;
            }

            hospital.GenerateBill(patient, billingMethod);
        }

        Console.ReadLine();
    }
}

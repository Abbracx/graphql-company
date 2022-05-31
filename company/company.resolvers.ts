import * as companyModel from "./company.model";

export const resolvers = {
  Query: {
    company: () => {
        return companyModel.displayCompay()
    },
    getEmployeeFromDepartment: (_: any, args: any) => {
      return companyModel.getEmployee(args.id, args.name);
    },
    getManagerFromDepartment: (_: any, args: any) => {
        return companyModel.getManager(args.name);
    },

    getDepartment: (_: any, args: any) => {
        return companyModel.getDepartment(args.name);
    },
  },

  Mutation: {
    addEmployee: (_: any, args: any) => {
        
      return companyModel.addEmployee(args.id, args.name, args.role, args.department);
    },
    
    addManager: (_: any, args: any) => {
      companyModel.addManager();
    },
    addDepartment: (_: any, args: any) => {
      companyModel.addDepartment();
    },
  },
};

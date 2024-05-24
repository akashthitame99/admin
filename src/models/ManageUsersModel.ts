export interface User {
  id?: number;
  uuid?: string;
  name?: string;
  email?: string
  role_id?: string;
  role_name?: string
  is_active?: string;
  action?: string;
  description?: string
  phone_number?: string
  permissions?: Permission[]
}

export interface SubPermission {
  menuId: string;
  section: string;
  displayName: string;
  isRead: boolean;
  isWrite: boolean;
  isDelete: boolean;
  subPermissions?: SubPermission[];
};

export interface Permission {
  id?:string;
  menuId: string;
  section: string;
  displayName: string;
  isRead: boolean;
  isWrite: boolean;
  isDelete: boolean;
  subPermissions?: SubPermission[];
};


export interface AssignedBuildings {
  id: number
  buildingName: string
  city: string
  state: string
  neighborhoodName: string
  zipCode: string
  volume: number
  actions?: string

}

export interface RolePermission {
  role_id?: string;
  role_name?: string
  permissions?: Permission[]
}

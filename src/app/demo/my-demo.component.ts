
import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  SkyModalService
} from '@skyux/modals';
import {
  GridOptions
} from 'ag-grid-community';
import { NewUserComponent } from './newUser/new-user.component';

@Component({
  selector: 'app-my-demo',
  templateUrl: './my-demo.component.html',
  styleUrls: ['./my-demo.component.scss']
})
export class MyDemoComponent implements OnInit {

  public helpKey: string = 'help-demo.html';

  public modalSize: string = 'medium';

  public gridOptions: GridOptions;

  public rowData: any[];

  public items: any[] = [
    { name: 'Option 1', disabled: false },
    { name: 'Disabled option', disabled: true },
    { name: 'Option 3', disabled: false },
    { name: 'Option 4', disabled: false },
    { name: 'Option 5', disabled: false }
  ];

  @Input()
  public message: string;

  public columnDefs = [
    {
      field: 'firstName',
      headerName: 'First Name',
      sortable: true
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      sortable: true
    },
    {
      field: 'contactNo',
      headerName: 'Contact No',
      sortable: true
    },
    {
      field: 'email',
      headerName: 'Email',
      sortable: true
    },
    {
      field: 'dob',
      headerName: 'DOB',
      sortable: true
    },
    {
      field: 'address',
      headerName: 'Address',
      sortable: true
    },
    {
      field: 'option',
      headerName: '-'
    }
  ];

  private actionsButton: any;

  public constructor(private modal: SkyModalService) {
    this.init();
  }
  public ngOnInit() {
    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: function (params) {
        params.api.sizeColumnsToFit();
      }
    };
  }

  public actionCellRenderer = () => {
    return (params: any) => {
      this.actionsButton = document.createElement('div');
      this.actionsButton.innerHTML = `
        <h1>hola vick</h1>
      `;
    };
  }

  public actionClicked(action: string): void {
    alert(`You selected ${action}.`);
  }

  public onOpenModalClick(): void {
    const modalInstanceType: any = NewUserComponent;
    const options: any = {
      helpKey: this.helpKey,
      size: this.modalSize
    };

    this.modal.open(modalInstanceType, options);
  }

  private init = () => {
    this.rowData = [
      {
        firstName: 'nombre1',
        lastName: 'apellido1',
        contactNo: '339000219',
        email: 'correo1@hotmail.com',
        dob: 'noc',
        address: 'direcccion',
        option: this.actionCellRenderer
      },
      {
        firstName: 'nombre2',
        lastName: 'apellido2',
        contactNo: '339000219',
        email: 'correo2@hotmail.com',
        dob: 'noc',
        address: 'direcccion',
        option: '<h1>hola</h1>'
      },
      {
        firstName: 'nombre3',
        lastName: 'apellido3',
        contactNo: '339000219',
        email: 'correo3@hotmail.com',
        dob: 'noc',
        address: 'direcccion',
        option: '<h1>hola</h1>'
      }
    ];
  }

}

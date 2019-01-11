import React from 'react';
import validationSchema from './IdentiftFormValidations';
import { Formik } from 'formik';
import CustomTextField from '../../common/custom-text-field/CustomTextField';
import ButtonAI from '../../common/button/ButtonAI';
import Form from '../../common/form/Form';

class IdentifyForm extends React.Component {

    renderFields(props) {
        const { handleSubmit, errors } = props;
        return (
            <Form>
                <CustomTextField
                    label="Nome"
                    name="name"
                    errors={errors}
                />
                <CustomTextField
                    label="E-mail"
                    name="email"
                    errors={errors}
                />
                <CustomTextField
                    label="Celular"
                    name="phone"
                    maskType="cel-phone"
                    errors={errors}
                />
                <CustomTextField
                    label="Prédio"
                    name="location"
                    errors={errors}
                />
                <CustomTextField
                    label="Projeto"
                    name="project"
                    errors={errors}
                />
                <ButtonAI customStyle={{ marginTop: 50 }} onPress={handleSubmit} title="PEDIR" />
            </Form>
        )
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <Formik
                onSubmit={handleSubmit.bind(this)}
                validationSchema={validationSchema}
                render={props => { return this.renderFields(props) }}
            />
        )
    }

}

export default IdentifyForm
import React from "react";
import './tarieven.styles.css';
import Button from '../button/button.component';

export default function tarievenComponent() {
    
    return (
        <div className="site-section">
            <div className="row mb-5 ">
                <div className="col-md-7 text-center mx-auto">
                    <p>Mijn tarieven</p>
                    <h2 className="serif">Bekijk mijn pakketten</h2>
                </div>
            </div>
            <div className="row-prices">
            <div className="columns-prices">
            <div className="price-wrapper">
            <ul className="price">
                <li className="grey">€995 / per dagsessie</li>
                <li>4 uur fotografie</li>
                <li>Foto's digitaal aangeleverd</li>
                <li>Alle foto's met zorg bewerkt op kleur, contrast en scherpte</li>
                <li>20 uur selectie en editing tijd</li>
                <li>Reiskosten tot max. 100 km inbegrepen</li>
                <li>Fotosessie op 1 plek</li>
                <li>Foto's aangeleverd zonder watermerk</li>
            </ul>
            </div>
            </div>
            <div className="columns-prices">
            <div className="price-wrapper">
            <ul className="price">
                <li className="green">€1495 / per dagsessie</li>
                <li>6 uur fotografie</li>
                <li>Foto's digitaal aangeleverd</li>
                <li>Alle foto's met zorg bewerkt op kleur, contrast en scherpte</li>
                <li>30 uur selectie en editing tijd</li>
                <li>Reiskosten tot max. 150 km inbegrepen</li>
                <li>Fotosessie op 2 plekken</li>
                <li>Foto's aangeleverd zonder watermerk</li>
            </ul>
            </div>
            </div>
            <div className="columns-prices">
            <div className="price-wrapper">
            <ul className="price">
                <li className="gold">€2000 / per dagsessie</li>
                <li>8 uur fotografie</li>
                <li>Foto's digitaal aangeleverd</li>
                <li>Alle foto's met zorg bewerkt op kleur, contrast en scherpte</li>
                <li>40 uur selectie en editing tijd</li>
                <li>Reiskosten tot max. 200 km inbegrepen</li>
                <li>Fotosessie op meerdere plekken</li>
                <li>Foto's aangeleverd zonder watermerk</li>
            </ul>
            </div>
            </div>
            </div>
            <div className="button-wrapper" style={{textAlign: 'center'}}>
                <Button CTA="Maak vrijblijven een reservering aan!" class="btn btn-dark" ctaLink="/contact"></Button>   
            </div>

        </div>
    )
}
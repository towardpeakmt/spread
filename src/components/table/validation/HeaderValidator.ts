import GC from '@grapecity/spread-sheets';

abstract class HeaderValidator {
  abstract validate(value: string): boolean;

  public invalidStyle(): GC.Spread.Sheets.Style {
    const style = new GC.Spread.Sheets.Style();
    const border = new GC.Spread.Sheets.LineBorder("red",GC.Spread.Sheets.LineStyle.medium);
    style.borderTop = style.borderRight = style.borderBottom = style.borderLeft = border;
    return style;
  }
}

export default HeaderValidator;
